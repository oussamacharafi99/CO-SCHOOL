package com.coschool.services;

import com.coschool.dto.ClasseProfDto;
import com.coschool.exeptions.CoEcoSchoolExepion;
import com.coschool.models.ClasseGroup;
import com.coschool.models.ClasseProf;
import com.coschool.models.ClasseProfId;
import com.coschool.models.Professeur;
import com.coschool.repositories.ClassGroupRepo;
import com.coschool.repositories.ClasseProfRepo;
import com.coschool.repositories.ProfRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClasseProfService {

    private final ClasseProfRepo classeProfRepo;
    private final ProfRepo profRepo;
    private final ClassGroupRepo classGroupRepo;

    public ClasseProfService(ClasseProfRepo classeProfRepo, ProfRepo profRepo, ClassGroupRepo classGroupRepo) {
        this.classeProfRepo = classeProfRepo;
        this.profRepo = profRepo;
        this.classGroupRepo = classGroupRepo;
    }

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
