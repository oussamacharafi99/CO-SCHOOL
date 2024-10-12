package com.coschool.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "classe_professeur")
public class ClasseProf {

    @EmbeddedId
    private ClasseProfId id;

    @ManyToOne
    @MapsId("classId")
    @JoinColumn(name = "classe_id", referencedColumnName = "id")
    private ClasseGroup classeGroup;

    @ManyToOne
    @MapsId("profId")
    @JoinColumn(name = "professeur_id", referencedColumnName = "id")
    private Professeur prof;
}
