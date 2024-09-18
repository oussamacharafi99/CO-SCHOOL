package com.CO_SCHOOL.dto;

import com.CO_SCHOOL.enums.Controle;
import com.CO_SCHOOL.enums.Semester;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

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
