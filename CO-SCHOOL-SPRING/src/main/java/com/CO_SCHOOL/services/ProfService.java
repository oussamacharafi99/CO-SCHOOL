package com.CO_SCHOOL.services;

import com.CO_SCHOOL.repositories.ProfRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfService {

    @Autowired
    private ProfRepo profRepo;
}
