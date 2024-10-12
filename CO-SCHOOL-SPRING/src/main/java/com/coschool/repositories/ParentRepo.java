package com.coschool.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.coschool.models.Parent;

@Repository
public interface ParentRepo extends CrudRepository<Parent, Integer> {
    boolean existsByIdentificationId(String identificationId);
}
