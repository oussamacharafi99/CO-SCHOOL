package com.CO_SCHOOL.dto;


import com.CO_SCHOOL.enums.Semester;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

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
