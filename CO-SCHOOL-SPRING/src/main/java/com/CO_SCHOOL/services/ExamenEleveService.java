package com.CO_SCHOOL.services;

import com.CO_SCHOOL.dto.*;
import com.CO_SCHOOL.enums.Assign;
import com.CO_SCHOOL.enums.Semester;
import com.CO_SCHOOL.models.*;
import com.CO_SCHOOL.repositories.EleveRepo;
import com.CO_SCHOOL.repositories.ExamenEleveRepo;
import com.CO_SCHOOL.repositories.ExamenRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
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

    @Autowired
    private ExamenRepo examenRepo;

    public String insertElevesToExamen(ExamenEleveDto examenEleveDto) {

        Examen examen = examenService.GetExamanById(examenEleveDto.getExamenId());

        System.out.println("examen: " + examenEleveDto.getExamenId());
        System.out.println("classe: " + examenEleveDto.getClasseId());


        examen.setAssign(Assign.ASSIGN);
        System.out.println("009----x> " + examen.getId());

        List<Eleve> eleves = eleveService.GetAllElevesByClasseId(examenEleveDto.getClasseId());

        for (Eleve eleve : eleves) {
            if (eleve.getId() == null) {
                System.out.println("Eleve ID is null or missing for: " + eleve);
                continue;
            }

            ExamenEleve examenEleve = new ExamenEleve();
            ExamenEleveId examenEleveId = new ExamenEleveId(examenEleveDto.getExamenId(), eleve.getId());
            examenEleve.setId(examenEleveId);
            examenEleve.setExamen(examen);
            examenEleve.setEleve(eleve);
            examenEleve.setExamen_note(null);

            examenEleveRepo.save(examenEleve);
        }


//        examenRepo.save(examen);

        return "Les élèves ont été assignés avec succès à l'examen.";
    }



    public String updateEleveNote(ExamenEleveNoteDto examenEleveNoteDto, Integer examenId, Integer eleveId) {
        ExamenEleveId examenEleveId = new ExamenEleveId(examenId , eleveId);
        ExamenEleve examenEleve = examenEleveRepo.findById(examenEleveId);
        examenEleve.setExamen_note(examenEleveNoteDto.getExamenNote());
        examenEleveRepo.save(examenEleve);
        return "the Note Added Successfully in the Eleve";
    }

    @Transactional
    public List<ResultDto> getResultEleve(Integer eleveId, String semester, Integer year) {
        List<Object[]> results = examenEleveRepo.findAggregatedResultsForEleve(eleveId, semester, year);
        return results.stream().map(result -> {
            String username = (String) result[0];
            String matter = (String) result[1];
            Semester semesterEnum = Semester.valueOf((String) result[2]);
            String classRoomName = (String) result[3];
            String schoolName = (String) result[4];
            Double firstNote = (Double) result[5];
            Double secondNote = (Double) result[6];
            Double thirdNote = (Double) result[7];
            Double fourthNote = (Double) result[8];
            Double activitiesNote = (Double) result[9];
            return new ResultDto(username, matter, semesterEnum, classRoomName, schoolName,firstNote, secondNote, thirdNote, fourthNote, activitiesNote);
        }).collect(Collectors.toList());
    }

    @Transactional
    public AvgNote getFinaleSemesterNote(Integer eleveId, String semester, Integer year) {
        Double avgNoteValue = examenEleveRepo.getResultAvg(eleveId, semester, year);
        return new AvgNote(avgNoteValue);
    }


    @Transactional
    public List<ExamenDateDto> getExamenDates(Integer eleveId) {
        List<Object[]> results = examenEleveRepo.getExamenDate(eleveId);
        return results.stream()
                .map(result -> {
                    String examenName = (String) result[0];
                    String matter = (String) result[1];
                    java.sql.Date sqlDate = (java.sql.Date) result[2];
                    LocalDate examenDate = sqlDate.toLocalDate();
                    Double examenNote = (Double) result[3];
                    return new ExamenDateDto(examenName, matter, examenDate ,examenNote);
                })
                .collect(Collectors.toList());
    }

    @Transactional
    public List<ExamenProfDto> getExamenProfWithoutNote(Integer id) {
        List<Object[]> ListExamensProfDto = examenEleveRepo.getExamenProfWithoutNote(id);
        return ListExamensProfDto.stream().map(examens -> {
            Integer idE = (Integer) examens[0];
            String exmanName = (String) examens[1];
            String matter = (String) examens[2];
            java.sql.Date sqlDate = (java.sql.Date) examens[3];
            LocalDate examen_date = sqlDate.toLocalDate();
            String semesterStr = (String) examens[4];
            Semester semester = Semester.valueOf(semesterStr);
            Integer ProfId = (Integer) examens[5];
            return new ExamenProfDto(idE, exmanName, matter, examen_date, semester, ProfId);
        }).collect(Collectors.toList());
    }



    public List<ClassPersonDto> getElevesByExamanId(Integer examanId) {
        List<Object[]> listEleves = examenEleveRepo.getElevesByExamanId(examanId);
        return listEleves.stream()
                .filter(eleve -> eleve[4] == null)
                .map(eleve -> {
                    Integer idE = (Integer) eleve[0];
                    String identificationId = (String) eleve[1];
                    String username =  (String) eleve[2];
                    String classRoomName = (String) eleve[3];
                    Double examenNote = (Double) eleve[4];
                    return new ClassPersonDto(idE, identificationId, username, classRoomName, examenNote);
                })
                .collect(Collectors.toList());
    }
}

