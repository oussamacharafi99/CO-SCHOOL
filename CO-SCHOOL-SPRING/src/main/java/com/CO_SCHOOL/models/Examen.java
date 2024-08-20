package com.CO_SCHOOL.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.List;

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

    @OneToMany(mappedBy = "examen")
    @JsonIgnore
    private List<ExamenEleve> examenEleves;

}
