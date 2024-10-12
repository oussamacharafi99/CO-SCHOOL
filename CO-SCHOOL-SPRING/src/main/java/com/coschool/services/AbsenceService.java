package com.coschool.services;

import com.coschool.models.Absence;
import com.coschool.repositories.AbsenceRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AbsenceService {

    private final AbsenceRepo absenceRepo;

    public AbsenceService(AbsenceRepo absenceRepo) {
        this.absenceRepo = absenceRepo;
    }


    public Map<String , String> insertAbsenceToEleve(Absence absence) {
        absenceRepo.save(absence);
        Map<String , String> map = new HashMap<>();
        map.put("msg" ,  "Absence inserted successfully");
        return map;
    }

    public List<Absence> getAbsenceEleveById(Integer id) {
        return absenceRepo.findByEleveId(id);
    }

}
