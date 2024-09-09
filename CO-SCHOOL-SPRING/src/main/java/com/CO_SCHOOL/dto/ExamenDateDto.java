package com.CO_SCHOOL.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExamenDateDto {
    private String examen_name;
    private String matter;
    private LocalDate examen_date;
    private Double examen_note;
}
