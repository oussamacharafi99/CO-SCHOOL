package com.coschool.services;

import com.coschool.dto.*;
import com.coschool.enums.Assign;
import com.coschool.enums.Semester;
import com.coschool.models.*;
import com.coschool.repositories.EleveRepo;
import com.coschool.repositories.ExamenEleveRepo;
import com.coschool.repositories.ExamenRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional
public class ExamenEleveService {


    private final ExamenEleveRepo examenEleveRepo;


    private final ExamenService examenService;


    private final EleveService eleveService;


    private final ExamenRepo examenRepo;

    public ExamenEleveService(ExamenEleveRepo examenEleveRepo, ExamenService examenService, EleveService eleveService, ExamenRepo examenRepo) {
        this.examenEleveRepo = examenEleveRepo;
        this.examenService = examenService;
        this.eleveService = eleveService;
        this.examenRepo = examenRepo;
    }

    public Map<String, String> insertElevesToExamen(ExamenEleveDto examenEleveDto) {

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

        Map<String,String> map = new HashMap<>();
        map.put("msg","Les élèves ont été assignés avec succès à l'examen.");

        return map;
    }

    public Map<String, String> deleteInsertionElevesToExamen(ExamenEleveDto examenEleveDto) {
        List<Eleve> eleves = eleveService.GetAllElevesByClasseId(examenEleveDto.getClasseId());
        Examen examen = examenService.GetExamanById(examenEleveDto.getExamenId());

        if (examen.getAssign() == Assign.ASSIGN) {
            for (Eleve eleve : eleves) {
                if (eleve.getId() != null) {
                    ExamenEleveId examenEleveId = new ExamenEleveId(examenEleveDto.getExamenId(), eleve.getId());
                    ExamenEleve exEl = examenEleveRepo.findById(examenEleveId);
                    if (exEl != null && exEl.getExamen_note() == null) {
                        examen.setAssign(Assign.INASSIGN);
                        examenRepo.save(examen);
                        examenEleveRepo.delete(exEl);
                    }
                }
            }
        }
        Map<String , String> map = new HashMap<>();
        map.put("msg" , "Les élèves ont été assignés pas  avec succès à l'examen.");
        return map;
    }




    public  Map<String, String> updateEleveNote(ExamenEleveNoteDto examenEleveNoteDto, Integer examenId, Integer eleveId) {
        ExamenEleveId examenEleveId = new ExamenEleveId(examenId , eleveId);
        ExamenEleve examenEleve = examenEleveRepo.findById(examenEleveId);
        examenEleve.setExamen_note(examenEleveNoteDto.getExamenNote());
        examenEleveRepo.save(examenEleve);

        Map<String , String> map = new HashMap<>();
        map.put("msg", "the Note Added Successfully in the Eleve");
        return map;
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


    private ExamenProfDto mapExamen(Object[] examens) {
        Integer idE = (Integer) examens[0];
        String examName = (String) examens[1];
        String matter = (String) examens[2];
        java.sql.Date sqlDate = (java.sql.Date) examens[3];
        LocalDate examen_date = sqlDate.toLocalDate();
        String semesterStr = (String) examens[4];
        Semester semester = Semester.valueOf(semesterStr);
        Integer profId = (Integer) examens[5];
        return new ExamenProfDto(idE, examName, matter, examen_date, semester, profId);
    }


    @Transactional(readOnly = true)
    public List<ExamenProfDto> getExamenProfEncoureCorection(Integer id) {
        List<Object[]> examensProfList = examenEleveRepo.getExamenProfEncoureCorrection(id);
        return examensProfList.stream()
                .map(this::mapExamen)
                .collect(Collectors.toList());
    }


    @Transactional(readOnly = true)
    public List<ExamenProfDto> getExamenProfCorrectionTerminee(Integer id) {
        List<Object[]> examensProfList = examenEleveRepo.getExamenProfCorrectionTerminer(id);
        return examensProfList.stream()
                .map(this::mapExamen)
                .collect(Collectors.toList());
    }

    public List<ClassPersonDto> getElevesByExamenId(Integer examanId) {
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

    public List<ClassPersonDto> getElevesByExamenIdForUpdateNotes(Integer examanId) {
        List<Object[]> listEleves = examenEleveRepo.getElevesByExamanId(examanId);
        return listEleves.stream()
                .map(eleve -> {
                    Integer idE = (Integer) eleve[0];
                    String identificationId = (String) eleve[1];
                    String username =  (String) eleve[2];
                    String classRoomName = (String) eleve[3];
                    Double examenNote = (Double) eleve[4];
                    String gender = (String) eleve [5];
                    return new ClassPersonDto(idE, identificationId, username, classRoomName, examenNote,gender);
                })
                .collect(Collectors.toList());
    }

   public List<ExamenDateDto> getExamenEleveByEleveIdAndProfId(Integer eleveId, Integer profId) {
        List<Object[]> listExams = examenEleveRepo.getExamenEleveByProfIdAndEleveId(eleveId , profId);
        return listExams.stream().map(exam ->{
            String matter = (String) exam[0];
            Double examenNote = (Double) exam[1];
            String semesterStr = (String) exam[2];
            Semester semester = Semester.valueOf(semesterStr);
            String examName = (String) exam[3];
            java.sql.Date sqlDate = (java.sql.Date) exam[4];
            LocalDate examen_date = sqlDate.toLocalDate();
            return  new ExamenDateDto(matter , examenNote , semester , examName , examen_date);
        }).collect(Collectors.toList());
    }



}

