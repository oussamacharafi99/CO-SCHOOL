package com.coschool.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.coschool.dto.AvgNote;
import com.coschool.dto.ExamenDateDto;
import com.coschool.dto.ResultDto;
import com.coschool.enums.Semester;
import com.coschool.models.ExamenEleve;
import com.coschool.models.ExamenEleveId;

import java.util.List;

@Repository
public interface ExamenEleveRepo extends JpaRepository<ExamenEleve, Integer> {
    ExamenEleve findById(ExamenEleveId examenEleveId);

    @Query(value = "SELECT " +
            "el.username, " +
            "ex.matter, " +
            "ex.semester, " +
            "exgp.class_room_name, " +
            "exgp.school_name,"+
            "MAX(CASE WHEN ex.examen_name = 'PREMIER_CONTROLE' THEN exl.examen_note ELSE NULL END) AS firstNote, " +
            "MAX(CASE WHEN ex.examen_name = 'DEUXIEME_CONTROLE' THEN exl.examen_note ELSE NULL END) AS secondNote, " +
            "MAX(CASE WHEN ex.examen_name = 'TROISIEME_CONTROLE' THEN exl.examen_note ELSE NULL END) AS thirdNote, " +
            "MAX(CASE WHEN ex.examen_name = 'QUATRIEME_CONTROLE' THEN exl.examen_note ELSE NULL END) AS fourthNote, " +
            "MAX(CASE WHEN ex.examen_name = 'ACTIVITES_INTEGREES' THEN exl.examen_note ELSE NULL END) AS activitiesNote " +
            "FROM " +
            "examen_eleve exl " +
            "INNER JOIN person el ON el.id = exl.eleve_id " +
            "INNER JOIN examen ex ON ex.id = exl.examen_id " +
            "INNER JOIN classe_group exgp ON exgp.id = ex.class_group_id " +
            "WHERE " +
            "exl.eleve_id = :id " +
            "AND ex.semester = :semester " +
            "AND YEAR(ex.examen_date) = :year " +
            "GROUP BY " +
            "el.username, " +
            "ex.matter, " +
            "ex.semester, " +
            "exgp.class_room_name LIMIT 7 ",
            nativeQuery = true)
    List<Object[]> findAggregatedResultsForEleve(@Param("id") Integer eleveId, @Param("semester") String semester, @Param("year") Integer year);


    @Query(value = "SELECT ROUND(AVG(exl.examen_note), 2) AS avg_note " +
            "FROM examen_eleve exl " +
            "INNER JOIN examen ex ON ex.id = exl.examen_id " +
            "WHERE exl.eleve_id = :eleveId " +
            "AND ex.semester = :semester " +
            "AND YEAR(ex.examen_date) = :year", nativeQuery = true)
    Double getResultAvg(@Param("eleveId") Integer eleveId,
                         @Param("semester") String semester,
                         @Param("year") Integer year);



    @Query(value = "SELECT ex.examen_name, ex.matter, ex.examen_date, exl.examen_note  " +
            "FROM examen_eleve exl " +
            "INNER JOIN examen ex ON ex.id = exl.examen_id " +
            "WHERE exl.eleve_id = :id ",
            nativeQuery = true)
    List<Object[]> getExamenDate(@Param("id") Integer id);



    @Query(value = "SELECT ex.id, ex.examen_name , ex.matter, ex.examen_date, ex.semester, ex.prof_id FROM examen_eleve el INNER JOIN examen ex ON ex.id = el.examen_id WHERE ex.prof_id =:id AND el.examen_note is null GROUP BY id" , nativeQuery = true)
    List<Object[]> getExamenProfWithoutNote(@Param("id") Integer id);


    @Query(value = "SELECT el.id, el.identification_id, el.username , cg.class_room_name , exl.examen_note , el.gender FROM examen_eleve exl INNER JOIN examen ex ON ex.id = exl.examen_id INNER JOIN person el ON el.id = eleve_id INNER JOIN classe_group cg ON cg.id = el.class_group_id WHERE examen_id =:id" , nativeQuery = true)
    List<Object[]> getElevesByExamanId(@Param("id") Integer id);

    @Query(value = "SELECT ex.id, ex.examen_name, ex.matter, ex.examen_date, ex.semester, ex.prof_id\n" +
            "FROM examen_eleve el\n" +
            "INNER JOIN examen ex ON ex.id = el.examen_id\n" +
            "WHERE ex.prof_id =:id\n" +
            "AND el.examen_note IS NULL \n" +
            "AND EXISTS (\n" +
            "    SELECT 1 \n" +
            "    FROM examen_eleve el2 \n" +
            "    WHERE el2.examen_id = ex.id \n" +
            "    AND el2.examen_note IS NOT NULL \n" +
            ")\n" +
            "GROUP BY ex.id;" , nativeQuery = true)
    List<Object[]> getExamenProfEncoureCorrection(@Param("id") Integer id);

    @Query(value = "SELECT ex.id, ex.examen_name, ex.matter, ex.examen_date, ex.semester, ex.prof_id FROM examen_eleve el INNER JOIN examen ex ON ex.id = el.examen_id WHERE ex.prof_id =:id AND NOT EXISTS ( SELECT 1 FROM examen_eleve el2 WHERE el2.examen_id = ex.id AND el2.examen_note IS NULL ) GROUP BY ex.id",nativeQuery = true)
    List<Object[]> getExamenProfCorrectionTerminer(@Param("id") Integer id);


//    pour obtenir examen avec note pour afficher toutes les examen d'un eleve par eleve id et prof id
    @Query(value = "SELECT ex.matter, exl.examen_note , ex.semester , ex.examen_name , ex.examen_date from examen_eleve exl INNER JOIN examen ex ON ex.id = exl.examen_id WHERE eleve_id =:idE AND ex.prof_id =:idP", nativeQuery = true)
    List<Object[]> getExamenEleveByProfIdAndEleveId(@Param("idE") Integer idE, @Param("idP") Integer idP);
}
