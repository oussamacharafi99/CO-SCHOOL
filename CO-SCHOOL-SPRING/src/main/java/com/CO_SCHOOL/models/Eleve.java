package com.CO_SCHOOL.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@DiscriminatorValue("ELEVE")
public class Eleve extends Person{

    @OneToMany(mappedBy = "eleve")
    @JsonIgnore
    private List<ExamenEleve> examenEleves;
}
