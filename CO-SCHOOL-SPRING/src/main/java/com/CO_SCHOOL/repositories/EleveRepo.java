package com.CO_SCHOOL.repositories;

import com.CO_SCHOOL.models.Eleve;
import com.CO_SCHOOL.models.Professeur;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EleveRepo extends CrudRepository<Eleve, Integer> {
    boolean existsByIdentificationId(String identificationId);

//    @Query(value = "SELECT Eleve FROM  Eleve E WHERE E.id =:id")
    Eleve findEleveById(int id);

//    @Query(value = "SELECT * FROM person p INNER JOIN classe_group cg ON cg.id = p.class_group_id WHERE p.class_group_id =:id" , nativeQuery = true)
//    List<Eleve> GetAllElevesByClasseId(@Param("id") Integer id);

//        @Query(value = "SELECT * FROM person p WHERE p.class_group_id = :id", nativeQuery = true)
//        List<Eleve> GetAllElevesByClasseId(@Param("id") Integer id);

    List<Eleve> findEleveByClasseGroupId(int classGroupId);

    @Query(value = "SELECT * FROM person WHERE dtype ='ELEVE'" ,nativeQuery = true)
    List<Eleve> getAllEleve();

    @Query(value = "SELECT e FROM Eleve e WHERE e.classeGroup.id =:id")
    List<Eleve> getAllEleveByClasseGroup(@Param("id") Integer id);
}
