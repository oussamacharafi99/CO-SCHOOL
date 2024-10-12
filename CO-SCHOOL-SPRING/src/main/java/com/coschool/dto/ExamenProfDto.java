package com.coschool.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

import com.coschool.enums.Semester;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExamenProfDto {
    private Integer id;
    private String examen_name;
    private String matter;
    private LocalDate examen_date;
    private Semester semester;
    private Integer prof_id;
}
