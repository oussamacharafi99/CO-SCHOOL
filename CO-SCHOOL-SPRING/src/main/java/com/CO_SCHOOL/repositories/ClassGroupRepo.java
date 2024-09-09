package com.CO_SCHOOL.repositories;

import com.CO_SCHOOL.models.ClasseGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClassGroupRepo extends JpaRepository<ClasseGroup, Integer> {
    @Query(value = "SELECT prof.username ,c.class_room_name FROM classe_professeur cp INNER JOIN person prof ON prof.id = cp.professeur_id INNER JOIN classe_group c ON c.id = cp.classe_id WHERE classe_id = :id GROUP By username", nativeQuery = true)
    public List<Object[]> getProfByClassGroupId(@Param("id") Integer id);
}
