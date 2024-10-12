package com.coschool.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Entity
@DiscriminatorValue("PROFESSEUR")
public class Professeur extends Person {

    @OneToMany(mappedBy = "professeur")
    @JsonIgnore
    private List<Examen> examens;

    @OneToMany(mappedBy = "prof")
    @JsonIgnore
    private List<ClasseProf> classeProfs;
}
