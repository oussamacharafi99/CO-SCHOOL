package com.coschool.controllers;


import com.coschool.dto.ClassPersonDto;
import com.coschool.dto.ClasseNameDto;
import com.coschool.dto.ClasseProfDto;
import com.coschool.models.ClasseGroup;
import com.coschool.services.ClasseGroupService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.stringtemplate.v4.ST;

import java.util.List;
import java.util.Map;


@CrossOrigin("*")
@RestController
@RequestMapping("api/classeGroup")
public class ClasseGroupController {


    private final ClasseGroupService classeGroupService;

    public ClasseGroupController(ClasseGroupService classeGroupService) {
        this.classeGroupService = classeGroupService;
    }

    @PostMapping("save")
    public Map<String , String> save(@RequestBody ClasseGroup classeGroup) {
        return classeGroupService.save(classeGroup);
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
    public List<ClasseNameDto> findClasseNameByProfId(@PathVariable Integer id) {
        return classeGroupService.getClasseNameByProfId(id);
    }

    @GetMapping("Prof_eleves/{id}")
    public List<ClassPersonDto> getProfEleves(@PathVariable Integer id) {
        return classeGroupService.getProfEleveByProfId(id);
    }
}
