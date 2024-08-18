package com.CO_SCHOOL.repositories;

import com.CO_SCHOOL.models.Eleve;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EleveRepo extends CrudRepository<Eleve, Integer> {
}
