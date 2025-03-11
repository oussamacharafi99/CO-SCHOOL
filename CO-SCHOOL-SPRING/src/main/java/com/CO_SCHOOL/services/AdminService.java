package com.CO_SCHOOL.services;

import com.CO_SCHOOL.enums.Role;
import com.CO_SCHOOL.models.Admin;
import com.CO_SCHOOL.repositories.AdminRepo;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

@Service
public class AdminService {

    @Autowired
    private AdminRepo adminRepo;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostConstruct
    public void initializeAdmin() {
        String email = "admin@coschool.com";
        String username = "admin";
        String password = "admin";

        Set<Role> roles = new HashSet<>();
        roles.add(Role.ROLE_ADMIN);

        if (!adminRepo.existsByEmail(email)) {
            Admin admin = new Admin();
            admin.setEmail(email);
            admin.setUsername(username);
            admin.setRoles(roles);
            admin.setPassword(bCryptPasswordEncoder.encode(password));
            adminRepo.save(admin);
            System.out.println("Admin initialized successfully");
        } else {
            System.out.println("Admin already exists");
        }
    }
}

