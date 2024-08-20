package com.CO_SCHOOL.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Examen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate examen_date;

    private String class_room;

    private String matter;

    @ManyToOne
    @JoinColumn(name = "prof_id")
    private Professeur professeur;

    @ManyToOne
    @JoinColumn(name = "eleve_id")
    private Eleve eleve;

}
