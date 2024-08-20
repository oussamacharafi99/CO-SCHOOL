package com.CO_SCHOOL.repositories;

import com.CO_SCHOOL.models.Examen;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ExamenRepo extends CrudRepository<Examen, Integer> {
    List<Examen> fintAllExamen();

    List<Examen> findExamenByEleveId(Integer eleveId);

    List<Examen> findAllByProfesseurId(Integer professeurId);
}
