package com.CO_SCHOOL.controllers;


import com.CO_SCHOOL.dto.EleveAbsenceDto;
import com.CO_SCHOOL.models.Eleve;
import com.CO_SCHOOL.models.Professeur;
import com.CO_SCHOOL.services.EleveService;
import com.CO_SCHOOL.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("api/eleve")
public class EleveController {

    @Autowired
    private EleveService eleveService;
    @Autowired
    private PersonService personService;

    @PostMapping("add")
    public String insertEleve(@RequestBody Eleve eleve) {
        return eleveService.insertEleve(eleve);
    }

    @GetMapping("get+eleve+by+id/{id}")
    public Eleve getEleveById(@PathVariable("id") Integer id) {
        return eleveService.getEleveByIdentity(id);
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


//    @PutMapping("change+password/{id}")
//    public String changePassword(@PathVariable int id, @RequestBody Eleve eleve) {
//        return eleveService.UpdatePassword(id , eleve);
//    }

}
