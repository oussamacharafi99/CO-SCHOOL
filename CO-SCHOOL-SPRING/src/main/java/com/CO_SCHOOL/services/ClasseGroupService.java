package com.CO_SCHOOL.services;

import com.CO_SCHOOL.exeptions.CoEcoSchoolExepion;
import com.CO_SCHOOL.models.ClasseGroup;
import com.CO_SCHOOL.repositories.ClassGroupRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
