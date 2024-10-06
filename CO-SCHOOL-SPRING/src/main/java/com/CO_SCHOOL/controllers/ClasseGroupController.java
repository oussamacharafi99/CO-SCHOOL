package com.CO_SCHOOL.controllers;


import com.CO_SCHOOL.dto.ClassPersonDto;
import com.CO_SCHOOL.dto.ClasseNameDto;
import com.CO_SCHOOL.dto.ClasseProfDto;
import com.CO_SCHOOL.models.ClasseGroup;
import com.CO_SCHOOL.services.ClasseGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/classeGroup")
@CrossOrigin("*")
public class ClasseGroupController {

    @Autowired
    private ClasseGroupService classeGroupService;

    @PostMapping("save")
    public String save(@RequestBody ClasseGroup classeGroup) {
        classeGroupService.save(classeGroup);
        return "The class group has been saved";
    }

    @GetMapping("get+all")
    public List<ClasseGroup> findAll() {
        return classeGroupService.findAll();
    }

    @GetMapping("get+id/{id}")
    public ClasseGroup findById(@PathVariable Integer id) {
        return classeGroupService.findById(id);
    }

    @DeleteMapping("delete/{id}")
    public String delete(@PathVariable Integer id) {
        classeGroupService.delete(id);
        return "The class group has been deleted";
    }

    @PutMapping("update/{id}")
    public String update(@PathVariable Integer id, @RequestBody ClasseGroup classeGroup) {
        classeGroupService.update(id, classeGroup);
        return "The class group has been updated";
    }

    @GetMapping("profs+class/{id}")
    public List<ClasseProfDto> getProsByClassGroupId(@PathVariable Integer id) {
        return classeGroupService.findAllProfByClassGroupId(id);
    }


    @GetMapping("get+class+by+prof+id/{id}")
    public List<ClasseNameDto> GetClasseNameByProfId(@PathVariable Integer id) {
        return classeGroupService.GetClasseNameByProfId(id);
    }

    @GetMapping("Prof_eleves/{id}")
    public List<ClassPersonDto> getProfEleves(@PathVariable Integer id){
        return classeGroupService.getProfEleveByProfId(id);
    }

    @GetMapping("get+classe+by+prof+id/{id}")
    public List<ClasseNameDto> getClasseNameByProfId(@PathVariable Integer id){
        return classeGroupService.getProfEleveNameByProfId(id);
    }
}
