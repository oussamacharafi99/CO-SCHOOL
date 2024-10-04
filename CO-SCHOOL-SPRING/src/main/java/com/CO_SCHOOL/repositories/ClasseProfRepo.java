package com.CO_SCHOOL.repositories;

import com.CO_SCHOOL.models.ClasseProf;
import com.CO_SCHOOL.models.ClasseProfId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClasseProfRepo extends JpaRepository<ClasseProf, ClasseProfId> {
}
