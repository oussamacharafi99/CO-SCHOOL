package com.coschool.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClassPersonDto {
        private Integer id;
        private Integer classeId;
        private String classRoomName;
        private String identificationId;
        private String username;
        private String email;
        private String gender;
        private Integer age;
        private Double examenNote;

        public ClassPersonDto(Integer id , String identificationId, String username, String classRoomName , Double examenNote) {
                this.id = id;
                this.identificationId = identificationId;
                this.username = username;
                this.classRoomName = classRoomName;
                this.examenNote = examenNote;
        }
        public ClassPersonDto(Integer id , String identificationId, String username, String classRoomName , Double examenNote, String gender) {
                this.id = id;
                this.identificationId = identificationId;
                this.username = username;
                this.classRoomName = classRoomName;
                this.examenNote = examenNote;
                this.gender = gender;
        }

        public ClassPersonDto(Integer id, Integer classeId, String classRoomName, String identificationId, String username, String email, String gender, Integer age) {
                this.id = id;
                this.classeId = classeId;
                this.classRoomName = classRoomName;
                this.identificationId = identificationId;
                this.username = username;
                this.email = email;
                this.gender = gender;
                this.age = age;
        }
}
