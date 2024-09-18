package com.CO_SCHOOL.controllers;


import com.CO_SCHOOL.models.Eleve;
import com.CO_SCHOOL.services.EleveService;
import com.CO_SCHOOL.services.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/eleve")
@CrossOrigin("*")
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

//    @PutMapping("change+password/{id}")
//    public String changePassword(@PathVariable int id, @RequestBody Eleve eleve) {
//        return eleveService.UpdatePassword(id , eleve);
//    }

}
