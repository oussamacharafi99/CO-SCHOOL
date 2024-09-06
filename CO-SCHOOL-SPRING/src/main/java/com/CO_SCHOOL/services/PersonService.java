package com.CO_SCHOOL.services;

import com.CO_SCHOOL.models.Person;
import com.CO_SCHOOL.repositories.PersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    @Autowired
    private PersonRepo personRepo;

    public Person findByUsername(String username) {
        return personRepo.findByUsername(username);
    }

    public Person findByIdentificationId(String identificationId) {
        return personRepo.findByIdentificationId(identificationId);
    }
}
