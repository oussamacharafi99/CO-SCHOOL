package com.CO_SCHOOL.dto;
import com.CO_SCHOOL.enums.Semester;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExamenDateDto {

    public ExamenDateDto(String examen_name, String matter, LocalDate examen_date, Double examen_note) {
    this.examen_name = examen_name;
    this.matter = matter;
    this.examen_date = examen_date;
    this.examen_note = examen_note;
    }

    private String matter;
    private Double examen_note;
    private Semester semester;
    private String examen_name;
    private LocalDate examen_date;

}
