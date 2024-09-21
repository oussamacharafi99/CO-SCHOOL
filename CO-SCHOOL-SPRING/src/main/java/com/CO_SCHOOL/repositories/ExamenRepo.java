package com.CO_SCHOOL.repositories;

import com.CO_SCHOOL.dto.ClasseProfDto;
import com.CO_SCHOOL.dto.ExamenNameDto;
import com.CO_SCHOOL.enums.Assign;
import com.CO_SCHOOL.models.Examen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExamenRepo extends JpaRepository<Examen, Integer> {
    List<Examen> findAllByProfesseurId(Integer professeurId);
    List<Examen> findAllByProfesseur_Id (Integer professeurId);

    @Query(value = "SELECT ex.id, ex.examen_name , ex.matter  FROM examen ex WHERE ex.assign = 'INASSIGN' AND ex.prof_id =:id " , nativeQuery = true)
    List<Object[]> getExamenNotAssign(@Param("id") Integer ic);
}
