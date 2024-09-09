package com.CO_SCHOOL.controllers;

import com.CO_SCHOOL.models.Absence;
import com.CO_SCHOOL.services.AbsenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/absence")
@CrossOrigin("*")
public class AbsenceController {
    @Autowired
    private AbsenceService absenceService;

    @PostMapping("insert")
    public String insertAbsence(@RequestBody Absence absence) {
        return absenceService.insertAbsenceToEleve(absence);
    }

    @GetMapping("get+all+by:/{id}")
    public List<Absence> getAbsenceByEleveId(@PathVariable Integer id) {
        return absenceService.getAbsenceEleveById(id);
    }

}
