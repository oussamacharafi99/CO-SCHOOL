package com.CO_SCHOOL.repositories;

import com.CO_SCHOOL.models.Admin;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepo extends CrudRepository<Admin, Integer> {
    Boolean existsByEmail(String email);
}
