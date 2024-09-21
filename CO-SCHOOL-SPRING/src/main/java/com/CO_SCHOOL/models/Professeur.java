package com.CO_SCHOOL.models;

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

    @ManyToMany(mappedBy = "professeurs")
    @JsonIgnore
    private List<ClasseGroup> classeGroups;
}
