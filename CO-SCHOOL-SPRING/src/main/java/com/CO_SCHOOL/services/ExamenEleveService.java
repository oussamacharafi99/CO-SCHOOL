package com.CO_SCHOOL.services;

import com.CO_SCHOOL.dto.ExamenEleveDto;
import com.CO_SCHOOL.dto.ExamenEleveNoteDto;
import com.CO_SCHOOL.dto.ResultDto;
import com.CO_SCHOOL.enums.Semester;
import com.CO_SCHOOL.models.Eleve;
import com.CO_SCHOOL.models.Examen;
import com.CO_SCHOOL.models.ExamenEleve;
import com.CO_SCHOOL.models.ExamenEleveId;
import com.CO_SCHOOL.repositories.ExamenEleveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ExamenEleveService {

    @Autowired
    private ExamenEleveRepo examenEleveRepo;

    @Autowired
    private ExamenService examenService;

    @Autowired
    private EleveService eleveService;

    public ExamenEleve insertEleve(ExamenEleveDto examenEleveDto) {
        Examen examen = examenService.GetExamanById(examenEleveDto.getExamenId());
        System.out.println("009----x> "+examen.getId());
        Eleve eleve = eleveService.getEleveById(examenEleveDto.getEleveId());
        System.out.println("008----e> "+eleve.getId());

        ExamenEleve examenEleve = new ExamenEleve();
        ExamenEleveId examenEleveId = new ExamenEleveId(examenEleveDto.getExamenId(), examenEleveDto.getEleveId());
        examenEleve.setId(examenEleveId);
        examenEleve.setExamen(examen);
        examenEleve.setEleve(eleve);
        examenEleve.setExamen_note(null);
        return examenEleveRepo.save(examenEleve);
    }


    public String updateEleveNote(ExamenEleveNoteDto examenEleveNoteDto, Integer examenId, Integer eleveId) {
        ExamenEleveId examenEleveId = new ExamenEleveId(examenId , eleveId);
        ExamenEleve examenEleve = examenEleveRepo.findById(examenEleveId);
        examenEleve.setExamen_note(examenEleveNoteDto.getExamenNote());
        examenEleveRepo.save(examenEleve);
        return "the Note Added Successfully in the Eleve";
    }

    @Transactional
    public List<ResultDto> getResultEleve(Integer eleve_id, String semester, Integer year) {
        List<Object[]> results = examenEleveRepo.findResultsForEleve(eleve_id, semester, year);
        return results.stream().map(result -> {
            String username = (String) result[0];
            Double examenNote = (Double) result[1];
            String examenName = (String) result[2];
            String matter = (String) result[3];
            Semester semesterEnum = Semester.valueOf((String) result[4]);
            String classRoomName = (String) result[5];
            return new ResultDto(username, examenNote, examenName, matter, semesterEnum, classRoomName);
        }).collect(Collectors.toList());
    }


}
