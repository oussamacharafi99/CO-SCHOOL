package com.CO_SCHOOL.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EleveAbsenceDto {
    private Integer id;
    private String identificationId;
    private String username;
    private String email;
    private String gender;
    private Integer age;
    private Long totalAbsences;
}
