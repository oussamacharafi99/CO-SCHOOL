package com.CO_SCHOOL.models;


import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@DiscriminatorValue("PARENT")
@Entity
public class Parent extends Person{
}
