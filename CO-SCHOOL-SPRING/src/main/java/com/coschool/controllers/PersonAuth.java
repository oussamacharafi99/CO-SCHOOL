package com.coschool.controllers;

import com.coschool.config.JwtAuth;
import com.coschool.dto.ChangePasswordDto;
import com.coschool.dto.JwtDto;
import com.coschool.models.Eleve;
import com.coschool.models.Person;
import com.coschool.repositories.PersonRepo;
import com.coschool.services.PersonService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/auth")
public class PersonAuth {

    private final AuthenticationManager authenticationManager;
    private final PersonService personService;
    public PersonAuth(AuthenticationManager authenticationManager, PersonService personService) {
        this.authenticationManager = authenticationManager;
        this.personService = personService;
    }


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

    @GetMapping("get+person/{id}")
    public Person getPerson(@PathVariable int id) {
        return personService.findById(id);
    }

}
