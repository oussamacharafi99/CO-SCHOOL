package com.CO_SCHOOL.models;


import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@DiscriminatorValue("PARENT")
@Entity
public class Parent extends Person{

    @ManyToOne
    @JoinColumn(name = "eleve_id")
    private Eleve eleve;
}
