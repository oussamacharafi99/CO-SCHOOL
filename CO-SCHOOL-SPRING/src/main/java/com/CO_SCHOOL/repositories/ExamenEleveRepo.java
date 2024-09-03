package com.CO_SCHOOL.repositories;

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

    @Query(value = "SELECT el.username, exl.examen_note, ex.examen_name, ex.matter, ex.semester, exgp.class_room_name " +
            "FROM examen_eleve exl " +
            "INNER JOIN person el ON el.id = exl.eleve_id " +
            "INNER JOIN examen ex ON ex.id = exl.examen_id " +
            "INNER JOIN classe_group exgp ON exgp.id = ex.class_group_id " +
            "WHERE exl.eleve_id = :id AND ex.semester = :semester AND YEAR(ex.examen_date) = :year", nativeQuery = true)
    List<Object[]> findResultsForEleve(@Param("id") Integer eleveId, @Param("semester") String semester, @Param("year") Integer year);
}
