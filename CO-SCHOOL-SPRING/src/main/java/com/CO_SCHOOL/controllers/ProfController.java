package com.CO_SCHOOL.controllers;

import com.CO_SCHOOL.models.Professeur;
import com.CO_SCHOOL.services.ProfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/prof")
@CrossOrigin("*")
public class ProfController {

    @Autowired
    private ProfService profService;

    @PostMapping("add")
    public String insertProf(@RequestBody Professeur professeur) {
        profService.insertProf(professeur);
        return "the professeur is inserted successfully";
    }
}
