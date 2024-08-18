package com.CO_SCHOOL.repositories;

import com.CO_SCHOOL.models.Professeur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfRepo extends JpaRepository<Professeur , Integer> {
}
