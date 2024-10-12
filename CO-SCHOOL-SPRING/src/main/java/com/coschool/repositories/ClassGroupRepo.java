package com.coschool.repositories;

import com.coschool.dto.ClasseNameDto;
import com.coschool.dto.ClasseProfDto;
import com.coschool.models.ClasseGroup;
import com.coschool.models.Professeur;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClassGroupRepo extends JpaRepository<ClasseGroup, Integer> {
    @Query(value = "SELECT prof.username ,c.class_room_name FROM classe_professeur cp INNER JOIN person prof ON prof.id = cp.professeur_id INNER JOIN classe_group c ON c.id = cp.classe_id WHERE classe_id = :id GROUP By username", nativeQuery = true)
    List<Object[]> getProfByClassGroupId(@Param("id") Integer id);

    @Query(value = "SELECT c.id, c.class_room_name FROM classe_professeur cp INNER JOIN classe_group c ON c.id = cp.classe_id WHERE cp.professeur_id =:id GROUP BY class_room_name" , nativeQuery = true)
    List<Object[]> getClasseNameByProfId(@Param("id") Integer id);

    @Query(value = "SELECT p.id, cp.classe_id, cg.class_room_name, p.identification_id, p.username, p.email, p.gender, p.age FROM classe_professeur cp INNER JOIN person p ON p.class_group_id = cp.classe_id INNER JOIN classe_group cg WHERE cp.professeur_id =:id AND dtype = 'ELEVE' GROUP BY username", nativeQuery = true)
    List<Object[]> getProfEleveByProfId(@Param("id") Integer id);

    @Query(value = "SELECT c.id , c.class_room_name FROM classe_professeur cp INNER JOIN classe_group c ON c.id = cp.classe_id WHERE cp.professeur_id = :id" , nativeQuery = true)
    List<Object[]> getAllClasseGroupNameByProfId(@Param("id") Integer id);

}
