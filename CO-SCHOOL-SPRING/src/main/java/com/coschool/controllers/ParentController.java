package com.coschool.controllers;
import com.coschool.models.Parent;
import com.coschool.services.ParentService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RequestMapping("api/parent")
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ParentController {

    private final ParentService parentService;
    public ParentController(ParentService parentService) {
        this.parentService = parentService;
    }

    @PostMapping("add")
    public String insertParent(@RequestBody Parent parent) {
        parentService.insertParent(parent);
        return  "the parent is inserted successfully";
    }
}
