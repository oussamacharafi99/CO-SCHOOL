package com.CO_SCHOOL.controllers;

import com.CO_SCHOOL.config.JwtAuth;
import com.CO_SCHOOL.dto.ChangePasswordDto;
import com.CO_SCHOOL.dto.JwtDto;
import com.CO_SCHOOL.models.Eleve;
import com.CO_SCHOOL.models.Person;
import com.CO_SCHOOL.repositories.PersonRepo;
import com.CO_SCHOOL.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin("*")
@RestController
@RequestMapping("api/auth")
public class PersonAuth {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PersonService personService;


    @PostMapping("login")
    public JwtDto login(@RequestBody Person personLogin) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(personLogin.getUsername().toUpperCase(), personLogin.getPassword())
        );
        Person person = personService.findByUsername(personLogin.getUsername().toUpperCase());
        Set<String> roles = person.getRoles().stream()
                .map(role -> role.name())
                .collect(Collectors.toSet());
        Integer personId = person.getId();
        String token = JwtAuth.generateToken(personLogin.getUsername().toUpperCase(), roles);
        return new JwtDto(personId , token);
    }

    @PutMapping("change+password/{id}")
    public String changePassword(@PathVariable int id, @RequestBody ChangePasswordDto changePasswordDto) {
        return personService.UpdatePassword(id , changePasswordDto);
    }

}
