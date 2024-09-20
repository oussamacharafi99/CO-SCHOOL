package com.CO_SCHOOL.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClassPersonDto {
        private Integer classeId;
        private String classRoomName;
        private String identificationId;
        private String username;
        private String email;
        private String gender;
        private Integer age;
}
