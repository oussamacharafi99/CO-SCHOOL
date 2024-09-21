package com.CO_SCHOOL.controllers;

import com.CO_SCHOOL.dto.ExamenNameDto;
import com.CO_SCHOOL.dto.InsertExamenDto;
import com.CO_SCHOOL.models.Examen;
import com.CO_SCHOOL.services.ExamenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/examen")
public class ExamenController {

    @Autowired
    private ExamenService examenService;

    @PostMapping("insert")
    public Examen insertExamen(@RequestBody InsertExamenDto insertExamenDto) {
        System.out.println("04004040-----"  + insertExamenDto.getProfId());
        return examenService.CreateExaman(insertExamenDto);
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

    @GetMapping("get+examen+inassign/{id}")
    public List<ExamenNameDto> getExamenInassign(@PathVariable Integer id) {
        return examenService.getExamenNotAssign(id);
    }


    @GetMapping("get+examen+by+prof/{id}")
    public List<Examen> getExamenByProf(@PathVariable Integer id) {
        return examenService.getExamenByProfId(id);
    }
}
