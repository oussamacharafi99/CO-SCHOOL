package com.CO_SCHOOL.models;

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

    private String class_room_name;

    private String school_name;

    @OneToMany(mappedBy = "classeGroup")
    @JsonIgnore
    private List<Eleve> eleves;

    @ManyToMany
    @JoinTable(
            name = "classe_professeur",
            joinColumns = @JoinColumn(name = "classe_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "professeur_id", referencedColumnName = "id")
    )
    @JsonIgnore
    private List<Professeur> professeurs;
}
