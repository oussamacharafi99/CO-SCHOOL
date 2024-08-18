package com.CO_SCHOOL.controllers;

import com.CO_SCHOOL.models.Eleve;
import com.CO_SCHOOL.models.Parent;
import com.CO_SCHOOL.services.ParentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/parent")
@RestController
@CrossOrigin("*")
public class ParentController {

    @Autowired
    private ParentService parentService;

    @PostMapping("/add")
    public String insertParent(@RequestBody Parent parent) {
        parentService.insertParent(parent);
        return  "the parent is inserted successfully";
    }
}
