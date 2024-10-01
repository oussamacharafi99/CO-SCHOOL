package com.CO_SCHOOL.controllers;

import com.CO_SCHOOL.dto.*;
import com.CO_SCHOOL.enums.Semester;
import com.CO_SCHOOL.models.ExamenEleve;
import com.CO_SCHOOL.services.ExamenEleveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/examen_eleve")
@CrossOrigin("*")
public class ExamenEleveController {
    @Autowired
    private ExamenEleveService examenEleveService;

    @PostMapping("insert")
    public String insertEleve(@RequestBody ExamenEleveDto examenEleveDto) {
        return examenEleveService.insertElevesToExamen(examenEleveDto);
    }

    @PutMapping("insert_note/{examenId}/{eleveId}")
    public String insert_note(@RequestBody ExamenEleveNoteDto examenEleveNoteDto, @PathVariable Integer examenId, @PathVariable Integer eleveId ) {
        return examenEleveService.updateEleveNote(examenEleveNoteDto, examenId, eleveId);
    }

    @GetMapping("/result/{eleve_id}/{semester}/{year}")
    public List<ResultDto> getResultsForEleve(
            @PathVariable Integer eleve_id,
            @PathVariable String semester,
            @PathVariable Integer year) {
        return examenEleveService.getResultEleve(eleve_id, semester, year);
    }

    @GetMapping("/result/total/{eleve_id}/{semester}/{year}")
    public AvgNote getFinaleSemesterNote(
            @PathVariable Integer eleve_id,
            @PathVariable String semester,
            @PathVariable Integer year
                                        ){
        return examenEleveService.getFinaleSemesterNote(eleve_id, semester, year);
    }

    @GetMapping("/result/examen+date/{id}")
    public List<ExamenDateDto> getExamenElevesByDate(@PathVariable Integer id) {
        return examenEleveService.getExamenDates(id);
    }


    @GetMapping("examen+prof+without+note/{id}")
    public List<ExamenProfDto> getExamenElevesWithoutNote(@PathVariable Integer id) {
        return examenEleveService.getExamenProfWithoutNote(id);
    }

    @GetMapping("examen+prof+encoure+correction/{id}")
    public List<ExamenProfDto> getExamenElevesEncoureCorriction(@PathVariable Integer id) {
        return examenEleveService.getExamenProfEncoureCorection(id);
    }

    @GetMapping("examen+prof+correction+terminer/{id}")
    public List<ExamenProfDto> getExamenProfCorrectionTerminee(@PathVariable Integer id) {
        return examenEleveService.getExamenProfCorrectionTerminee(id);
    }

    @GetMapping("get+eleve+by+examen+id:/{id}")
    public List<ClassPersonDto> getEleveByExamenId(@PathVariable Integer id) {
        return examenEleveService.getElevesByExamenId(id);
    }

    @GetMapping("get+eleve+for+update+by+id/{id}")
    public List<ClassPersonDto> getElevesByExamenIdForUpdateNotes(@PathVariable Integer id) {
        return examenEleveService.getElevesByExamenIdForUpdateNotes(id);
    }

    @GetMapping("get+exams+by+eleve+prof/{ide}/{idp}")
    public List<ExamenDateDto> getExamenEleveByEleveIdAndProfId(@PathVariable Integer ide, @PathVariable Integer idp) {
        return examenEleveService.getExamenEleveByEleveIdAndProfId(ide, idp);
    }
}
