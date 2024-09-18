package com.CO_SCHOOL.services;

import com.CO_SCHOOL.dto.ChangePasswordDto;
import com.CO_SCHOOL.models.Eleve;
import com.CO_SCHOOL.models.Person;
import com.CO_SCHOOL.repositories.PersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    @Autowired
    private PersonRepo personRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Person findByUsername(String username) {
        return personRepo.findByUsername(username);
    }

    public Person findByIdentificationId(String identificationId) {
        return personRepo.findByIdentificationId(identificationId);
    }

    public String UpdatePassword(Integer id , ChangePasswordDto changePasswordDto) {
        Person person1 = personRepo.findById(id).orElseThrow();
        person1.setPassword(passwordEncoder.encode(changePasswordDto.getPassword()));
        personRepo.save(person1);
        return "The password updated successfully";
    }

    public Person findById(Integer id) {
        return personRepo.findById(id).orElseThrow();
    }

}
