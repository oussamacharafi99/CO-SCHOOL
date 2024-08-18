package com.CO_SCHOOL.services;

import com.CO_SCHOOL.enums.Role;
import com.CO_SCHOOL.models.Eleve;
import com.CO_SCHOOL.models.Parent;
import com.CO_SCHOOL.repositories.ParentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class ParentService {
    @Autowired
    private ParentRepo parentRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public Parent insertParent(Parent parent) {
        parent.setPassword(passwordEncoder.encode(parent.getPassword()));
        Set<Role> roles = new HashSet<>();
        roles.add(Role.ROLE_PARENT);
        parent.setRoles(roles);
        return parentRepo.save(parent);
    }


}
