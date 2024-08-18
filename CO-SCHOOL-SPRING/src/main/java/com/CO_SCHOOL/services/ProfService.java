package com.CO_SCHOOL.services;

import com.CO_SCHOOL.enums.Role;
import com.CO_SCHOOL.models.Parent;
import com.CO_SCHOOL.models.Professeur;
import com.CO_SCHOOL.repositories.ProfRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class ProfService {

    @Autowired
    private ProfRepo profRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public Professeur insertProf(Professeur professeur) {
        professeur.setPassword(passwordEncoder.encode(professeur.getPassword()));
        Set<Role> roles = new HashSet<>();
        roles.add(Role.ROLE_PROF);
        professeur.setRoles(roles);
        return profRepo.save(professeur);
    }

}
