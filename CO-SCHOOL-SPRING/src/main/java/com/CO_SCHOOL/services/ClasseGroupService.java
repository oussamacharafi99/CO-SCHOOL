package com.CO_SCHOOL.services;

import com.CO_SCHOOL.dto.ClasseProfDto;
import com.CO_SCHOOL.exeptions.CoEcoSchoolExepion;
import com.CO_SCHOOL.models.ClasseGroup;
import com.CO_SCHOOL.repositories.ClassGroupRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClasseGroupService {
    @Autowired
    private ClassGroupRepo classGroupRepo;

    public ClasseGroup save(ClasseGroup classGroup) {
        return classGroupRepo.save(classGroup);
    }

    public List<ClasseGroup> findAll() {
        return classGroupRepo.findAll();
    }

    public ClasseGroup findById(int id) {
        return classGroupRepo.findById(id).get();
    }

    public void delete(Integer id) {
        classGroupRepo.deleteById(id);
    }

    public ClasseGroup update(Integer id , ClasseGroup classGroup) {
        ClasseGroup classGroup1 = classGroupRepo.findById(id).orElseThrow(()-> new CoEcoSchoolExepion("not found by :" + id));
        classGroup1.setId(id);
        classGroup1.setClass_room_name(classGroup.getClass_room_name());
        return classGroupRepo.save(classGroup1);
    }

    public List<ClasseProfDto> findAllProfByClassGroupId(Integer id) {
        List<Object[]> profsClass = classGroupRepo.getProfByClassGroupId(id);
        return profsClass.stream().map(profClass -> {
            String professor_name = (String) profClass[0];
            String class_name = (String) profClass[1];
            return new ClasseProfDto(professor_name, class_name);
        }).collect(Collectors.toList());
    }
}
