package com.CO_SCHOOL.controllers;

import com.CO_SCHOOL.models.Professeur;
import com.CO_SCHOOL.services.ProfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/prof")
@CrossOrigin("*")
public class ProfController {

    @Autowired
    private ProfService profService;

    @PostMapping("add")
    public String insertProf(@RequestBody Professeur professeur) {
        return profService.insertProf(professeur);
    }

    @GetMapping("get+all")
    public List<Professeur> getAllProf() {
        return profService.getAllProfesseurs();
    }
    @GetMapping("get+all+class+room/{id}")
    public List<Professeur> getAllProfByClasseRoomName(@PathVariable Integer id) {
        return profService.getAllProfsByClasseRoomName(id);
    }
}
