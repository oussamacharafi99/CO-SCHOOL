package com.coschool.services;

import com.coschool.dto.ChangePasswordDto;
import com.coschool.models.Eleve;
import com.coschool.models.Person;
import com.coschool.repositories.PersonRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PersonService {


    private final PersonRepo personRepo;
    private final PasswordEncoder passwordEncoder;

    public PersonService(PersonRepo personRepo, PasswordEncoder passwordEncoder) {
        this.personRepo = personRepo;
        this.passwordEncoder = passwordEncoder;
    }

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
