package com.CO_SCHOOL.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@DiscriminatorValue("PROFESSEUR")
public class Professeur extends Person{

    @OneToMany(mappedBy = "professeur")
    @JsonIgnore
    private List<Examen> examens;

    @ManyToOne
    @JoinColumn(name = "class_group_id")
    private ClasseGroup classeGroup;

}
