package com.coschool.controllers;

import com.coschool.models.Eleve;
import com.coschool.models.Professeur;
import com.coschool.services.ProfService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/prof")
@CrossOrigin(origins = "http://localhost:4200")
public class ProfController {

    private final ProfService profService;
    public ProfController(ProfService profService) {
        this.profService = profService;
    }

    @PostMapping("add")
    public Map<String, String> insertProf(@RequestBody Professeur professeur) {
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
    @PutMapping("update/{id}")
    public Map<String, String> updateProf(@RequestBody Professeur professeur, @PathVariable Integer id) {
        return profService.updateProf(id ,professeur );
    }
    @GetMapping("get+prof+by+id/{id}")
    public Professeur getProfById(@PathVariable("id") Integer id) {
        return profService.getProfById(id);
    }

}
