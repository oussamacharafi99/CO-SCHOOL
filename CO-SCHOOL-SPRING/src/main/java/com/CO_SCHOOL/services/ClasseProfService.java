package com.CO_SCHOOL.services;

import com.CO_SCHOOL.dto.ClasseProfDto;
import com.CO_SCHOOL.exeptions.CoEcoSchoolExepion;
import com.CO_SCHOOL.models.ClasseGroup;
import com.CO_SCHOOL.models.ClasseProf;
import com.CO_SCHOOL.models.ClasseProfId;
import com.CO_SCHOOL.models.Professeur;
import com.CO_SCHOOL.repositories.ClassGroupRepo;
import com.CO_SCHOOL.repositories.ClasseProfRepo;
import com.CO_SCHOOL.repositories.ProfRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClasseProfService {

    @Autowired
    private ClasseProfRepo classeProfRepo;
    @Autowired
    private ProfRepo profRepo;
    @Autowired
    private ClassGroupRepo classGroupRepo;

    public List<ClasseProf> getClassProf() {
        return classeProfRepo.findAll();
    }

    public String assignProfToClass(ClasseProfDto classeProfDto) {
        Professeur professeur = profRepo.findById(classeProfDto.getProfessor_id())
                .orElseThrow(() -> new CoEcoSchoolExepion("Professor not found"));
        ClasseGroup classe = classGroupRepo.findById(classeProfDto.getClass_id())
                .orElseThrow(() -> new CoEcoSchoolExepion("Class not found"));

        ClasseProfId classeProfId = new ClasseProfId(classeProfDto.getClass_id(), classeProfDto.getProfessor_id());

        // Check if the professor is already assigned to the class
        if (classeProfRepo.existsById(classeProfId)) {
            return "Professor already assigned to this class";
        }

        ClasseProf classeProf = new ClasseProf();
        classeProf.setId(classeProfId);
        classeProf.setClasseGroup(classe);
        classeProf.setProf(professeur);

        classeProfRepo.save(classeProf);
        return "The professor was assigned successfully";
    }
}
