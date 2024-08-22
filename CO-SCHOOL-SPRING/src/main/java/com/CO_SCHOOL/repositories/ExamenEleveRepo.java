package com.CO_SCHOOL.repositories;

import com.CO_SCHOOL.models.ExamenEleve;
import com.CO_SCHOOL.models.ExamenEleveId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExamenEleveRepo extends JpaRepository<ExamenEleve, Integer> {
    ExamenEleve findById(ExamenEleveId examenEleveId);
}
