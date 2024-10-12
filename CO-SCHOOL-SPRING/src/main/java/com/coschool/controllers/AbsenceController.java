package com.coschool.controllers;

import com.coschool.models.Absence;
import com.coschool.services.AbsenceService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/absence")
@CrossOrigin("*")
public class AbsenceController {


    private final AbsenceService absenceService;

    public AbsenceController(AbsenceService absenceService) {
        this.absenceService = absenceService;
    }

    @PostMapping("insert")
    public Map<String, String>
    insertAbsence(@RequestBody Absence absence) {
        return absenceService.insertAbsenceToEleve(absence);
    }

    @GetMapping("get+all+by:/{id}")
    public List<Absence> getAbsenceByEleveId(@PathVariable Integer id) {
        return absenceService.getAbsenceEleveById(id);
    }

}
