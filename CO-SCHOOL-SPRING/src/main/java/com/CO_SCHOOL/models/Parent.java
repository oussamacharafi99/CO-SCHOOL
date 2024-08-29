package com.CO_SCHOOL.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@DiscriminatorValue("PARENT")
@Entity
public class Parent extends Person{

    @OneToMany(mappedBy = "parent")
    @JsonIgnore
    private List<Eleve> eleves;
}
