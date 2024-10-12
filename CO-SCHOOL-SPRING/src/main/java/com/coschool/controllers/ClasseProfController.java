package com.coschool.controllers;

import com.coschool.dto.ClasseProfDto;
import com.coschool.services.ClasseProfService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/classe+prof")
public class ClasseProfController {

    private final ClasseProfService classeProfService;
    public ClasseProfController(ClasseProfService classeProfService) {
        this.classeProfService = classeProfService;
    }

    @PostMapping("assign")
    public String assign(@RequestBody ClasseProfDto classeProfDto) {
        if (classeProfDto.getClass_id() == null || classeProfDto.getProfessor_id() == null) {
            throw new IllegalArgumentException("Both professor_id and class_id must be provided.");
        }
        return classeProfService.assignProfToClass(classeProfDto);
    }
}
