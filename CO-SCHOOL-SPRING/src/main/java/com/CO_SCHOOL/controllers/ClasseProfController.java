package com.CO_SCHOOL.controllers;

import com.CO_SCHOOL.dto.ClasseProfDto;
import com.CO_SCHOOL.services.ClasseProfService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("api/classe+prof")
public class ClasseProfController {
    @Autowired
    private ClasseProfService classeProfService;

    @PostMapping("assign")
    public String assign(@RequestBody ClasseProfDto classeProfDto) {
        if (classeProfDto.getClass_id() == null || classeProfDto.getProfessor_id() == null) {
            throw new IllegalArgumentException("Both professor_id and class_id must be provided.");
        }
        return classeProfService.assignProfToClass(classeProfDto);
    }
}
