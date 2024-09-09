package com.CO_SCHOOL.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@DiscriminatorValue("ELEVE")
public class Eleve extends Person {

    @OneToMany(mappedBy = "eleve")
    @JsonIgnore
    private List<ExamenEleve> examenEleves;

    @OneToMany(mappedBy = "eleve")
    @JsonIgnore
    private List<Absence> absences;

    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Parent parent;

    @ManyToOne
    @JoinColumn(name = "class_group_id")
    private ClasseGroup classeGroup;

}
