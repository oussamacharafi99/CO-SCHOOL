package com.coschool.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

import com.coschool.enums.Controle;
import com.coschool.enums.Semester;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InsertExamenDto {
    private LocalDate examenDate;
    private String matter;
    private Semester semester;
    private Integer profId;
    private Integer classGroupId;
    private Controle examenName;
}
