package com.CO_SCHOOL.services;

import com.CO_SCHOOL.dto.ClassPersonDto;
import com.CO_SCHOOL.dto.ClasseNameDto;
import com.CO_SCHOOL.dto.ClasseProfDto;
import com.CO_SCHOOL.exeptions.CoEcoSchoolExepion;
import com.CO_SCHOOL.models.ClasseGroup;
import com.CO_SCHOOL.repositories.ClassGroupRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClasseGroupService {
    private static final Logger log = LoggerFactory.getLogger(ClasseGroupService.class);
    @Autowired
    private ClassGroupRepo classGroupRepo;

    public ClasseGroup save(ClasseGroup classGroup) {
        classGroup.setSchool_name("CO-SCHOOL");
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

    public List<ClasseNameDto> GetClasseNameByProfId(Integer id) {
        System.out.println(id + "----");
        List<Object[]> ListClassesNames = classGroupRepo.GetClasseNameByProfId(id);
        return ListClassesNames.stream().map(classes -> {
            Integer idc = (Integer) classes [0];
            String class_name = (String) classes[1];
            return new ClasseNameDto(idc, class_name);
        }).collect(Collectors.toList());
    }

    public List<ClassPersonDto> getProfEleveByProfId(Integer id) {
        List<Object[]> eleves = classGroupRepo.getProfEleveByProfId(id);
        return eleves.stream().map(eleve ->{
            Integer idP = (Integer)eleve[0];
            Integer classeId = (Integer) eleve[1];
            String classRoomName = (String) eleve[2];
            String identificationId = (String) eleve[3];
            String username = (String) eleve[4];
            String email = (String) eleve[5];
            String gender = (String) eleve[6];
            Integer age = (Integer) eleve[7];
            return new ClassPersonDto(idP, classeId, classRoomName, identificationId, username, email, gender, age);
        }).collect(Collectors.toList());
    }

    public List<ClasseNameDto> getProfEleveNameByProfId(Integer id) {
        List<Object[]> ListClasse = classGroupRepo.getAllClasseGroupNameByProfId(id);
        return ListClasse.stream().map(classe ->{
            Integer idC = (Integer) classe[0];
            String classRoomName = (String) classe[1];
            return new ClasseNameDto(idC, classRoomName);
        }).collect(Collectors.toList());
    }
}
