package com.CO_SCHOOL.controllers;


import com.CO_SCHOOL.models.Eleve;
import com.CO_SCHOOL.services.EleveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/eleve")
@CrossOrigin("*")
public class EleveController {

    @Autowired
    private EleveService eleveService;

    @PostMapping("add")
    public String insertEleve(@RequestBody Eleve eleve) {
        return eleveService.insertEleve(eleve);
    }

}
