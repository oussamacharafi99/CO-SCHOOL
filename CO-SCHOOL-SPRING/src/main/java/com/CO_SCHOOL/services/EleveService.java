package com.CO_SCHOOL.services;

import com.CO_SCHOOL.enums.Role;
import com.CO_SCHOOL.exeptions.CoEcoSchoolExepion;
import com.CO_SCHOOL.models.Eleve;
import com.CO_SCHOOL.repositories.EleveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Service
public class EleveService {
    private static final String LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final int NUMBER_LENGTH = 6;
    private static final SecureRandom RANDOM = new SecureRandom();

    @Autowired
    private EleveRepo eleveRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    public String insertEleve(Eleve eleve) {
        eleve.setPassword(passwordEncoder.encode(eleve.getPassword()));
        Set<Role> roles = new HashSet<>();
        roles.add(Role.ROLE_PROF);
        eleve.setRoles(roles);

        eleve.setIdentificationId(generateUniqueIdentificationId());

        eleveRepo.save(eleve);

        return "The Eleve added successfully";
    }

    private String generateUniqueIdentificationId() {
        String identificationId;
        do {
            identificationId = generateIdentificationId();
        } while (eleveRepo.existsByIdentificationId(identificationId));
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

    public Eleve getEleveById(Integer id) {
        return eleveRepo.findById(id).orElseThrow(()-> new CoEcoSchoolExepion("No Eleve found with id: " + id));
    }

    public Eleve getEleveByIdentity(Integer id) {
        return eleveRepo.findEleveById(id);
    }

//    public String UpdatePassword(Integer id , Eleve eleve) {
//        Eleve eleve1 = eleveRepo.findById(id).orElseThrow();
//        eleve1.setPassword(passwordEncoder.encode(eleve.getPassword()));
//        eleveRepo.save(eleve1);
//        return "The password updated successfully";
//    }

    public List<Eleve> GetAllElevesByClasseId(Integer id) {
        return eleveRepo.findEleveByClasseGroupId(id);
    }

}
