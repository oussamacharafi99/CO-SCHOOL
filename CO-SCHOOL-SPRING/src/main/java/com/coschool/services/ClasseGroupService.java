package com.coschool.services;

import com.coschool.dto.ClassPersonDto;
import com.coschool.dto.ClasseNameDto;
import com.coschool.dto.ClasseProfDto;
import com.coschool.exeptions.CoEcoSchoolExepion;
import com.coschool.models.ClasseGroup;
import com.coschool.repositories.ClassGroupRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ClasseGroupService {

    private static final Logger log = LoggerFactory.getLogger(ClasseGroupService.class);

    private final ClassGroupRepo classGroupRepo;

    public ClasseGroupService(ClassGroupRepo classGroupRepo) {
        this.classGroupRepo = classGroupRepo;
    }

    public ClasseGroup save(ClasseGroup classGroup) {
        return classGroupRepo.save(classGroup);
    }

    public List<ClasseGroup> findAll() {
        return classGroupRepo.findAll();
    }

    public ClasseGroup findById(int id) {
        return classGroupRepo.findById(id)
                .orElseThrow(() -> new CoEcoSchoolExepion("ClasseGroup not found with id: " + id));
    }

    public void delete(Integer id) {
        classGroupRepo.deleteById(id);
    }

    public ClasseGroup update(Integer id, ClasseGroup updatedClassGroup) {
        ClasseGroup existingClassGroup = classGroupRepo.findById(id)
                .orElseThrow(() -> new CoEcoSchoolExepion("ClasseGroup not found with id: " + id));

        existingClassGroup.setClassRoomName(updatedClassGroup.getClassRoomName());
        existingClassGroup.setSchoolName(updatedClassGroup.getSchoolName());
        return classGroupRepo.save(existingClassGroup);
    }

    public List<ClasseProfDto> findAllProfByClassGroupId(Integer id) {
        List<Object[]> profsClass = classGroupRepo.getProfByClassGroupId(id);
        return profsClass.stream()
                .map(profClass -> new ClasseProfDto((String) profClass[0], (String) profClass[1]))
                .collect(Collectors.toList());
    }

    public List<ClasseNameDto> getClasseNameByProfId(Integer id) {
        List<Object[]> classList = classGroupRepo.getClasseNameByProfId(id);
        return classList.stream()
                .map(classes -> new ClasseNameDto((Integer) classes[0], (String) classes[1]))
                .collect(Collectors.toList());
    }

    public List<ClassPersonDto> getProfEleveByProfId(Integer id) {
        List<Object[]> eleves = classGroupRepo.getProfEleveByProfId(id);
        return eleves.stream()
                .map(eleve -> new ClassPersonDto(
                        (Integer) eleve[0], (Integer) eleve[1], (String) eleve[2],
                        (String) eleve[3], (String) eleve[4], (String) eleve[5],
                        (String) eleve[6], (Integer) eleve[7]
                ))
                .collect(Collectors.toList());
    }

    public List<ClasseNameDto> getProfEleveNameByProfId(Integer id) {
        List<Object[]> classList = classGroupRepo.getAllClasseGroupNameByProfId(id);
        return classList.stream()
                .map(classe -> new ClasseNameDto((Integer) classe[0], (String) classe[1]))
                .collect(Collectors.toList());
    }
}
