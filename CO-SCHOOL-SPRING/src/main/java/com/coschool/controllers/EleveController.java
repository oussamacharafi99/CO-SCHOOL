package com.coschool.controllers;


import com.coschool.dto.EleveAbsenceDto;
import com.coschool.models.Eleve;
import com.coschool.models.Professeur;
import com.coschool.services.EleveService;
import com.coschool.services.PersonService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("api/eleve")
public class EleveController {

    private final EleveService eleveService;
    private final PersonService personService;
    public EleveController(EleveService eleveService, PersonService personService) {
        this.eleveService = eleveService;
        this.personService = personService;
    }

    @PostMapping("add")
    public Map<String, String> insertEleve(@RequestBody Eleve eleve) {
        return eleveService.insertEleve(eleve);
    }

    @GetMapping("get+eleve+by+id/{id}")
    public Eleve getEleveById(@PathVariable("id") Integer id) {
        return eleveService.getEleveById(id);
    }

    @GetMapping("get+all")
    public List<Eleve> getAllEleves() {
        return eleveService.getAllEleves();
    }

    @GetMapping("get+all/{id}")
    public List<Eleve> getAllElevesByClassGroupId(@PathVariable("id") Integer classGroupId) {
        return eleveService.getAllElevesByClassGroupId(classGroupId);
    }

    @GetMapping("get+absences+eleve+by+classe+id/{id}")
    public List<EleveAbsenceDto> getEleveAbsenceById(@PathVariable("id") Integer id) {
        return eleveService.getEleveAbsenceById(id);
    }
    @GetMapping("get+absences+eleves")
    public List<EleveAbsenceDto> getEleveAbsence() {
        return eleveService.getEleveAbsence();
    }


    @PutMapping("update/{id}")
    public Map<String, String> updateEleve(@RequestBody Eleve eleve, @PathVariable Integer id) {
        return eleveService.updateEleve(id , eleve);
    }


}
