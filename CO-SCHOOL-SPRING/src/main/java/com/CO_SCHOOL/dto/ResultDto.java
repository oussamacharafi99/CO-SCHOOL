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
        private String matter;
        private Semester semester;
        private String classRoomName;
        private String school_name;
        private Double firstNote;
        private Double secondNote;
        private Double thirdNote;
        private Double fourthNote;
        private Double activitiesNote;
}
