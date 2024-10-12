package com.coschool.models;

import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class ExamenEleveId implements Serializable {
    private Integer examenId;
    private Integer eleveId;

    public ExamenEleveId() {}

    public ExamenEleveId(Integer examenId, Integer eleveId) {
        this.examenId = examenId;
        this.eleveId = eleveId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ExamenEleveId that = (ExamenEleveId) o;
        return Objects.equals(examenId, that.examenId) && Objects.equals(eleveId, that.eleveId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(examenId, eleveId);
    }
}
