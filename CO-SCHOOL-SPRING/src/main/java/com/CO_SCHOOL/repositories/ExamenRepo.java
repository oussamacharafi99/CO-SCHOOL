package com.CO_SCHOOL.repositories;

import com.CO_SCHOOL.dto.ClasseProfDto;
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

}
