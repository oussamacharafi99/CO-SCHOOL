package com.coschool.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClasseProfDto {

    public ClasseProfDto(String professor_name, String class_name) {
        this.professor_name = professor_name;
        this.class_name = class_name;
    }
    private Integer professor_id;
    private Integer class_id;
    private String professor_name;
    private String class_name;


}
