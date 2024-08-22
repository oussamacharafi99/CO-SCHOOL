package com.CO_SCHOOL.services;

import com.CO_SCHOOL.enums.Role;
import com.CO_SCHOOL.exeptions.CoEcoSchoolExepion;
import com.CO_SCHOOL.models.Eleve;
import com.CO_SCHOOL.repositories.EleveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class EleveService {
    @Autowired
    private EleveRepo eleveRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    public String insertEleve(Eleve eleve) {
        eleve.setPassword(passwordEncoder.encode(eleve.getPassword()));
        Set<Role> roles = new HashSet<>();
        roles.add(Role.ROLE_ELEVE);
        eleve.setRoles(roles);
        eleveRepo.save(eleve);
        return "Eleve inserted successfully";
    }

    public Eleve getEleveById(Integer id) {
        return eleveRepo.findById(id).orElseThrow(()-> new CoEcoSchoolExepion("No Eleve found with id: " + id));
    }

}
