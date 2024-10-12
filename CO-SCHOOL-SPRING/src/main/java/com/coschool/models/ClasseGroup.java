package com.coschool.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ClasseGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String classRoomName;

    private String schoolName = "CO-SCHOOL";

    @OneToMany(mappedBy = "classeGroup")
    @JsonIgnore
    private List<Eleve> eleves;

    @OneToMany(mappedBy = "classeGroup")
    @JsonIgnore
    private List<ClasseProf> classeProfs;

}
