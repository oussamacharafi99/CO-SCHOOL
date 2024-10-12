package com.coschool.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ExamenNameDto {
    private Integer examenId;
    private String examenName;
    private String matter;
}
