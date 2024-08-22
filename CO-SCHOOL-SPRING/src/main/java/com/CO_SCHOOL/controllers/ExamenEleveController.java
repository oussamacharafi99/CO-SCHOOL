package com.CO_SCHOOL.controllers;

import com.CO_SCHOOL.dto.ExamenEleveDto;
import com.CO_SCHOOL.dto.ExamenEleveNoteDto;
import com.CO_SCHOOL.models.ExamenEleve;
import com.CO_SCHOOL.services.ExamenEleveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/examen_eleve")
@CrossOrigin("*")
public class ExamenEleveController {
    @Autowired
    private ExamenEleveService examenEleveService;

    @PostMapping("insert")
    public ExamenEleve insertEleve(@RequestBody ExamenEleveDto examenEleveDto) {
        System.out.println("---- > x :  " + examenEleveDto.getExamenId());
        System.out.println("---- > e :  " + examenEleveDto.getEleveId());
        return examenEleveService.insertEleve(examenEleveDto);
    }

    @PutMapping("insert_note/{examenId}/{eleveId}")
    public String insert_note(@RequestBody ExamenEleveNoteDto examenEleveNoteDto, @PathVariable Integer examenId, @PathVariable Integer eleveId ) {
        return examenEleveService.updateEleveNote(examenEleveNoteDto, examenId, eleveId);
    }

}
