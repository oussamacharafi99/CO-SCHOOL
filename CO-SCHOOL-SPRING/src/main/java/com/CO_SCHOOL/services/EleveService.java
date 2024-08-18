package com.CO_SCHOOL.services;

import com.CO_SCHOOL.enums.Role;
import com.CO_SCHOOL.models.Eleve;
import com.CO_SCHOOL.repositories.EleveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class EleveService {
    @Autowired
    private EleveRepo eleveRepo;

    public Eleve insertEleve(Eleve eleve) {
        Set<Role> roles = new HashSet<>();
        roles.add(Role.ROLE_ELEVE);
        eleve.setRoles(roles);
        return eleveRepo.save(eleve);
    }

}
