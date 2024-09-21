package com.CO_SCHOOL.services;

import com.CO_SCHOOL.dto.ExamenNameDto;
import com.CO_SCHOOL.dto.InsertExamenDto;
import com.CO_SCHOOL.enums.Assign;
import com.CO_SCHOOL.models.ClasseGroup;
import com.CO_SCHOOL.models.Eleve;
import com.CO_SCHOOL.models.Examen;
import com.CO_SCHOOL.models.Professeur;
import com.CO_SCHOOL.repositories.ClassGroupRepo;
import com.CO_SCHOOL.repositories.ExamenRepo;
import com.CO_SCHOOL.repositories.ProfRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExamenService {

    private static final Logger log = LoggerFactory.getLogger(ExamenService.class);
    @Autowired
    private ExamenRepo examenRepo;

    @Autowired
    private ProfRepo profRepo;

    @Autowired
    private ClassGroupRepo classGroupRepo;

    public Examen CreateExaman(InsertExamenDto insertExamenDto) {
        System.out.println("id class : " + insertExamenDto.getClassGroupId());
        System.out.println("id prof : " + insertExamenDto.getProfId());

        Examen examen = new Examen();
        Professeur professeur = profRepo.findById(insertExamenDto.getProfId()).orElseThrow(() -> new IllegalArgumentException("Professeur non trouvé"));
        ClasseGroup classeGroup = classGroupRepo.findById(insertExamenDto.getClassGroupId()).orElseThrow();
        examen.setProfesseur(professeur);
        examen.setExamen_name(insertExamenDto.getExamenName());
        examen.setExamen_date(insertExamenDto.getExamenDate());
        examen.setClassGroup(classeGroup);
        examen.setMatter(insertExamenDto.getMatter());
        examen.setSemester(insertExamenDto.getSemester());
        examen.setAssign(Assign.INASSIGN);
        return examenRepo.save(examen);
    }

    public Examen GetExamanById(int id) {
        return examenRepo.findById(id).orElseThrow(()-> new RuntimeException("No examen found with id: " + id));
    }

    public List<Examen> getAllExamen() {
        return examenRepo.findAll();
    }



    public List<Examen> getExamenByProfId(Integer profId) {
        return examenRepo.findAllByProfesseurId(profId);
    }

    public List<ExamenNameDto> getExamenNotAssign(){
        List<Object[]> examens = examenRepo.getExamenNotAssign();
        return examens.stream().map(examen ->{
            Integer examenId = (Integer)examen[0];
            String examenName = (String)examen[1];
            String matter = (String)examen[2];
            return new ExamenNameDto(examenId , examenName , matter);
        }).collect(Collectors.toList());
    }


//    public List<Examen> getExamenByEleveId(Integer id) {
//        return examenRepo.findByIdEleve(id);
//    }


//    public Examen updateExaman(Examen examen) {
//        return examenRepo.save(examen);
//    }


//    public  List<Examen> getAllByProfId(Integer profId) {
//        return examenRepo.findAllByProfesseurId(profId);
//    }

}
