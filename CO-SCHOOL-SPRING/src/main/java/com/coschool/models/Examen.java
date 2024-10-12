package com.coschool.models;

import com.coschool.enums.Assign;
import com.coschool.enums.Controle;
import com.coschool.enums.Semester;
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

    @Enumerated(EnumType.STRING)
    private Controle examen_name;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate examen_date;

    private String matter;

    @Enumerated(EnumType.STRING)
    private Semester semester;

    @Enumerated(EnumType.STRING)
    private Assign assign;

    @ManyToOne
    @JoinColumn(name = "prof_id", referencedColumnName = "id")
    private Professeur professeur;

    @ManyToOne
    @JoinColumn(name = "class_group_id", referencedColumnName = "id")
    private ClasseGroup classGroup;

    @OneToMany(mappedBy = "examen")
    @JsonIgnore
    private List<ExamenEleve> examenEleves;
}