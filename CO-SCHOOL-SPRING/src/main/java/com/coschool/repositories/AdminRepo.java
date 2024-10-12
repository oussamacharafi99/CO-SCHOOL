package com.coschool.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.coschool.models.Admin;

@Repository
public interface AdminRepo extends CrudRepository<Admin, Integer> {
}
