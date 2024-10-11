package com.CO_SCHOOL.services;

import com.CO_SCHOOL.enums.Role;
import com.CO_SCHOOL.models.Parent;
import com.CO_SCHOOL.models.Professeur;
import com.CO_SCHOOL.repositories.ProfRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class ProfService {

    @Autowired
    private ProfRepo profRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    private static final String LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final int NUMBER_LENGTH = 6;
    private static final SecureRandom RANDOM = new SecureRandom();

    public String insertProf(Professeur professeur) {

        professeur.setPassword(passwordEncoder.encode(professeur.getPassword()));


        Set<Role> roles = new HashSet<>();
        roles.add(Role.ROLE_PROF);
        professeur.setRoles(roles);

        professeur.setIdentificationId(generateUniqueIdentificationId());

        profRepo.save(professeur);

        return "The Prof added successfully";
    }

    private String generateUniqueIdentificationId() {
        String identificationId;
        do {
            identificationId = generateIdentificationId();
        } while (profRepo.existsByIdentificationId(identificationId));
        return identificationId;
    }

    private String generateIdentificationId() {
        StringBuilder sb = new StringBuilder();

        char letter = LETTERS.charAt(RANDOM.nextInt(LETTERS.length()));
        sb.append(letter);

        for (int i = 0; i < NUMBER_LENGTH; i++) {
            sb.append(RANDOM.nextInt(10));
        }

        return sb.toString();
    }

    public List<Professeur> getAllProfesseurs() {
        return profRepo.getAllProfesseurs();
    }

    public List<Professeur> getAllProfsByClasseRoomName(Integer id){
        return profRepo.getAllProfsByClasseRoomName(id);
    }
}
