package com.CO_SCHOOL.services;

import com.CO_SCHOOL.models.Absence;
import com.CO_SCHOOL.repositories.AbsenceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AbsenceService {
    @Autowired
    private AbsenceRepo absenceRepo;

    public Map<String , String> insertAbsenceToEleve(Absence absence) {
        absenceRepo.save(absence);
        Map<String , String> map = new HashMap<>();
        map.put("msg" ,  "Absence inserted successfully");
        return map;
    }

//    public List<Absence> getAllAbsences() {
//        return absenceRepo.findAll();
//    }

    public List<Absence> getAbsenceEleveById(Integer id) {
        return absenceRepo.findByEleveId(id);
    }

}
