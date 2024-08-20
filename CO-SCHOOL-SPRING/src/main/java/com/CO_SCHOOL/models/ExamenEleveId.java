package com.CO_SCHOOL.models;

import jakarta.persistence.Embeddable;

import java.io.Serializable;
import java.util.Objects;

@Embeddable
public class ExamenEleveId implements Serializable {
    private int examenId;
    private int eleveId;

    public ExamenEleveId() {}

    public ExamenEleveId(int examenId, int eleveId) {
        this.examenId = examenId;
        this.eleveId = eleveId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ExamenEleveId that = (ExamenEleveId) o;
        return examenId == that.examenId && eleveId == that.eleveId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(examenId, eleveId);
    }

}
