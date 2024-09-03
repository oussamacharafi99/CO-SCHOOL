package com.CO_SCHOOL.dto;

import com.CO_SCHOOL.enums.Semester;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ResultDto {
    private String username;
    private Double examen_note;
    private String examen_name;
    private String matter;
    private Semester semester;
    private String class_room_name;
}
