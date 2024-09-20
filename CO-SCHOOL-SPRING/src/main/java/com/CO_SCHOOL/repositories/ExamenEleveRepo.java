package com.CO_SCHOOL.repositories;

import com.CO_SCHOOL.dto.AvgNote;
import com.CO_SCHOOL.dto.ExamenDateDto;
import com.CO_SCHOOL.dto.ResultDto;
import com.CO_SCHOOL.enums.Semester;
import com.CO_SCHOOL.models.ExamenEleve;
import com.CO_SCHOOL.models.ExamenEleveId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

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


//    @Query(value = "SELECT ex.examen_name , ex.examen_date FROM examen_eleve exl INNER JOIN examen ex ON ex.id = examen_id WHERE eleve_id = :id AND exl.examen_note IS NULL" , nativeQuery = true)
//    List<ExamenDateDto> getExamenDate(@Param("id") Integer id);

    @Query(value = "SELECT ex.examen_name, ex.matter, ex.examen_date, exl.examen_note  " +
            "FROM examen_eleve exl " +
            "INNER JOIN examen ex ON ex.id = exl.examen_id " +
            "WHERE exl.eleve_id = :id ",
            nativeQuery = true)
    List<Object[]> getExamenDate(@Param("id") Integer id);



    @Query(value = "SELECT ex.id, ex.examen_name , ex.matter, ex.examen_date, ex.semester, ex.prof_id FROM examen_eleve el INNER JOIN examen ex ON ex.id = el.examen_id WHERE ex.prof_id =:id AND el.examen_note is null" , nativeQuery = true)
    List<Object[]> getExamenProfWithoutNote(@Param("id") Integer id);

}
