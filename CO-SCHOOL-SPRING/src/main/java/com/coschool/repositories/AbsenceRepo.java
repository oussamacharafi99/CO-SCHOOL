package com.coschool.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coschool.models.Absence;

import java.util.List;

@Repository
public interface AbsenceRepo extends JpaRepository<Absence, Integer> {
   List<Absence> findByEleveId(int eleveId);
}
