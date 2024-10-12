package com.coschool.controllers;

import com.coschool.dto.ExamenNameDto;
import com.coschool.dto.InsertExamenDto;
import com.coschool.models.Examen;
import com.coschool.services.ExamenService;

import org.hibernate.sql.Insert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/examen")
public class ExamenController {

    private final ExamenService examenService;
    public ExamenController(ExamenService examenService) {
        this.examenService = examenService;
    }

    @PostMapping("insert")
    public Examen insertExamen(@RequestBody InsertExamenDto insertExamenDto) {
        System.out.println("04004040-----"  + insertExamenDto.getProfId());
        return examenService.CreateExaman(insertExamenDto);
    }

    @GetMapping("get+examen+by+id/{id}")
    public Examen getExamenById(@PathVariable int id) {
       return examenService.GetExamanById(id);
    }

    @GetMapping("get_all")
    public List<Examen> getAllExamen() {
        return examenService.getAllExamen();
    }

    @GetMapping("get_examens_prof/{id}")
    public List<Examen> getExamenProf(@PathVariable Integer id) {
        return examenService.getExamenByProfId(id);
    }


    @GetMapping("get+examen+inassign/{id}")
    public List<ExamenNameDto> getExamenInassign(@PathVariable Integer id) {
        return examenService.getExamenNotAssign(id);
    }


    @GetMapping("get+examen+by+prof/{id}")
    public List<Examen> getExamenByProf(@PathVariable Integer id) {
        return examenService.getExamenByProfId(id);
    }

    @PutMapping("update+examen/{id}")
    public Examen updateExamen(@PathVariable int id, @RequestBody InsertExamenDto insertExamenDto) {
        return examenService.UpdateExaman(id, insertExamenDto);
    }

    @GetMapping("get+examen+inassign+by+prof+id/{id}")
    public List<Examen> getExamenInassignByProf(@PathVariable Integer id) {
        return examenService.getExamenInAssignByProfId(id);
    }


    @DeleteMapping("delete/{id}")
    public Map<String, String> deleteExamen(@PathVariable int id) {
        return examenService.deleteExamen(id);
    }

}
