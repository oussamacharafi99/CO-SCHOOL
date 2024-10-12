package com.coschool.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coschool.models.ClasseProf;
import com.coschool.models.ClasseProfId;

@Repository
public interface ClasseProfRepo extends JpaRepository<ClasseProf, ClasseProfId> {
}
