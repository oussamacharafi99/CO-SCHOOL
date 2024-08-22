package com.CO_SCHOOL.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class ExamenEleve {

    @EmbeddedId
    private ExamenEleveId id;

    private Double examen_note;

    @ManyToOne
    @MapsId("eleveId")
    @JoinColumn(name = "eleve_id")
    private Eleve eleve;

    @ManyToOne
    @MapsId("examenId")
    @JoinColumn(name = "examen_id")
    private Examen examen;


}
