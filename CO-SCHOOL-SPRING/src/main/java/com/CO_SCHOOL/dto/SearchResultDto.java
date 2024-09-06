package com.CO_SCHOOL.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SearchResultDto {
    private Integer eleve_id;
    private String semester;
    private Integer year;
}
