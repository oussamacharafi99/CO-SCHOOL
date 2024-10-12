package com.coschool.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.coschool.models.Examen;

import java.util.List;

@Repository
public interface ExamenRepo extends JpaRepository<Examen, Integer> {
    List<Examen> findAllByProfesseurId(Integer professeurId);
    List<Examen> findAllByProfesseur_Id (Integer professeurId);

    @Query(value = "SELECT ex.id, ex.examen_name , ex.matter  FROM examen ex WHERE ex.assign = 'INASSIGN' AND ex.prof_id =:id " , nativeQuery = true)
    List<Object[]> getExamenNotAssign(@Param("id") Integer id);


    @Query(value = "SELECT * FROM examen ex WHERE ex.prof_id =:id AND ex.assign = 'INASSIGN'" , nativeQuery = true)
    List<Examen> getExamenInAssignByProfId(@Param("id") Integer id);

}
