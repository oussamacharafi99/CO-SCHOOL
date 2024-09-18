package com.CO_SCHOOL.repositories;

import com.CO_SCHOOL.models.Parent;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParentRepo extends CrudRepository<Parent, Integer> {
    boolean existsByIdentificationId(String identificationId);
}
