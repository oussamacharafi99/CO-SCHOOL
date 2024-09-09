package com.CO_SCHOOL.repositories;

import com.CO_SCHOOL.models.Absence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AbsenceRepo extends JpaRepository<Absence, Integer> {
   List<Absence> findByEleveId(int eleveId);
}
