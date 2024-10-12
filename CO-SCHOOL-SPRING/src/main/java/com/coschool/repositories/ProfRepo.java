package com.coschool.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.coschool.models.Professeur;

import java.util.List;

@Repository
public interface ProfRepo extends JpaRepository<Professeur , Integer> {
    boolean existsByIdentificationId(String identificationId);

    @Query(value = "SELECT * FROM person WHERE dtype ='PROFESSEUR'" ,nativeQuery = true)
    List<Professeur> getAllProfesseurs();

    @Query(value = "SELECT p.* FROM classe_professeur cp INNER JOIN person p ON p.id = cp.professeur_id INNER JOIN classe_group cg ON cg.id = cp.classe_id WHERE cg.id =:id" ,nativeQuery = true)
    List<Professeur> getAllProfsByClasseRoomName(@Param("id") Integer id);
}
