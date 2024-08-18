package com.CO_SCHOOL.services;

import com.CO_SCHOOL.repositories.ParentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParentService {
    @Autowired
    private ParentRepo parentRepo;
}
