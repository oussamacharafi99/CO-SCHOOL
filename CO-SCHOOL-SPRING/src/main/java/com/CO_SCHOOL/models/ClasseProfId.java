package com.CO_SCHOOL.models;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.Objects;

@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class ClasseProfId {
    private int classId;
    private int profId;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ClasseProfId that = (ClasseProfId) o;
        return classId == that.classId && profId == that.profId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(classId, profId);
    }
}
