package com.CO_SCHOOL.services;

import com.CO_SCHOOL.models.Absence;
import com.CO_SCHOOL.repositories.AbsenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AbsenceService {
    @Autowired
    private AbsenceRepo absenceRepo;

    public String insertAbsenceToEleve(Absence absence) {
        absenceRepo.save(absence);
        return "Absence inserted successfully";
    }

//    public List<Absence> getAllAbsences() {
//        return absenceRepo.findAll();
//    }

    public List<Absence> getAbsenceEleveById(Integer id) {
        return absenceRepo.findByEleveId(id);
    }

}
