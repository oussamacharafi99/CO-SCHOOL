package com.coschool.services;

import com.coschool.enums.Role;
import com.coschool.models.Parent;
import com.coschool.repositories.ParentRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.HashSet;
import java.util.Set;

@Service
public class ParentService {

    private static final String LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final int NUMBER_LENGTH = 6;
    private static final SecureRandom RANDOM = new SecureRandom();


    private final ParentRepo parentRepo;
    private final BCryptPasswordEncoder passwordEncoder;

    public ParentService(ParentRepo parentRepo, BCryptPasswordEncoder passwordEncoder) {
        this.parentRepo = parentRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public String insertParent(Parent parent) {
        parent.setPassword(passwordEncoder.encode(parent.getPassword()));


        Set<Role> roles = new HashSet<>();
        roles.add(Role.ROLE_PROF);
        parent.setRoles(roles);

        parent.setIdentificationId(generateUniqueIdentificationId());

        parentRepo.save(parent);

        return "The Parent added successfully";
    }

    private String generateUniqueIdentificationId() {
        String identificationId;
        do {
            identificationId = generateIdentificationId();
        } while (parentRepo.existsByIdentificationId(identificationId));
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

}
