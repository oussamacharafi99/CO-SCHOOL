package com.coschool.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coschool.models.Person;

@Repository
public interface PersonRepo extends JpaRepository<Person , Integer> {
    Person findByUsername(String username);
    Person findByIdentificationId(String identificationId);
}
