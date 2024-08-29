package com.CO_SCHOOL.controllers;


import com.CO_SCHOOL.models.ClasseGroup;
import com.CO_SCHOOL.services.ClasseGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/classeGroup")
public class ClasseGroupController {

    @Autowired
    private ClasseGroupService classeGroupService;

    @PostMapping("save")
    public String save(ClasseGroup classeGroup) {
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
}
