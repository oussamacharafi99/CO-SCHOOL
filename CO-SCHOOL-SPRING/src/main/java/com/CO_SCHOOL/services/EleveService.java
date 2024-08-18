package com.CO_SCHOOL.services;

import com.CO_SCHOOL.repositories.EleveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EleveService {
    @Autowired
    private EleveRepo eleveRepo;
}
