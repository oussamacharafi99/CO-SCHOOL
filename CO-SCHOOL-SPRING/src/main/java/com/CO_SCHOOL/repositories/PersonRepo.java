package com.CO_SCHOOL.repositories;
import com.CO_SCHOOL.models.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepo extends JpaRepository<Person , Integer> {
    Person findByUsername(String username);
    Person findByIdentificationId(String identificationId);
}
