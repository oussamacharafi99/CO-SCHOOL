package com.coschool.services;

import com.coschool.enums.Role;
import com.coschool.models.Eleve;
import com.coschool.models.Parent;
import com.coschool.models.Professeur;
import com.coschool.repositories.ProfRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.*;

@Service
public class ProfService {

    private final ProfRepo profRepo;
    private final PasswordEncoder passwordEncoder;

    private static final String LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final int NUMBER_LENGTH = 6;
    private static final SecureRandom RANDOM = new SecureRandom();

    public ProfService(ProfRepo profRepo, PasswordEncoder passwordEncoder) {
        this.profRepo = profRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public Map<String, String> insertProf(Professeur professeur) {

        professeur.setPassword(passwordEncoder.encode(professeur.getPassword()));


        Set<Role> roles = new HashSet<>();
        roles.add(Role.ROLE_PROF);
        professeur.setRoles(roles);

        professeur.setIdentificationId(generateUniqueIdentificationId());

        profRepo.save(professeur);
        Map<String , String> map = new HashMap<>();
        map.put("msg" ,"The Prof added successfully" );

        return map;
    }

    public Map<String, String> updateProf(Integer id, Professeur professeur) {

        Professeur updatedProfesseur = profRepo.findById(id).orElseThrow(() ->
                new IllegalArgumentException("Professeur not found with ID: " + id));


        updatedProfesseur.setUsername(professeur.getUsername());
        if(professeur.getPassword() != null){
            String encodedPassword = passwordEncoder.encode(professeur.getPassword());
            updatedProfesseur.setPassword(encodedPassword);
        }
        updatedProfesseur.setRoles(professeur.getRoles());
        updatedProfesseur.setAge(professeur.getAge());
        updatedProfesseur.setEmail(professeur.getEmail());
        updatedProfesseur.setGender(professeur.getGender());

        profRepo.save(updatedProfesseur);

        Map<String, String> map = new HashMap<>();
        map.put("msg", "The Professeur updated successfully");
        return map;
    }

    public Professeur getProfById(Integer id) {
        return profRepo.findById(id).orElseThrow(() ->
                new IllegalArgumentException("Professeur not found with ID: " + id));
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
