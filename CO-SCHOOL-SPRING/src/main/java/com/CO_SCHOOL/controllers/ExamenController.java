package com.CO_SCHOOL.controllers;

import com.CO_SCHOOL.models.Examen;
import com.CO_SCHOOL.services.ExamenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/examen")
public class ExamenController {

    @Autowired
    private ExamenService examenService;

    @PostMapping("insert")
    public Examen insertExamen(@RequestBody Examen examen) {
        return examenService.CreateExaman(examen);
    }

    @GetMapping("get_all")
    public List<Examen> getAllExamen() {
        return examenService.getAllExamen();
    }

    @GetMapping("get_examens_prof/{id}")
    public List<Examen> getExamenProf(@PathVariable Integer id) {
        return examenService.getExamenByProfId(id);
    }

//    @GetMapping("get_examens_eleve/{id}")
//    public List<Examen> getExamenEleve(@PathVariable Integer id) {
//        return examenService.getExamenByEleveId(id);
//    }
}
