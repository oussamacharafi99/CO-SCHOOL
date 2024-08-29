package com.CO_SCHOOL.repositories;

import com.CO_SCHOOL.models.ClasseGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassGroupRepo extends JpaRepository<ClasseGroup, Integer> {
}
