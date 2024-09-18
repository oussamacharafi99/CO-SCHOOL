package com.CO_SCHOOL.repositories;

import com.CO_SCHOOL.models.Eleve;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EleveRepo extends CrudRepository<Eleve, Integer> {
    boolean existsByIdentificationId(String identificationId);

//    @Query(value = "SELECT Eleve FROM  Eleve E WHERE E.id =:id")
    Eleve findEleveById(int id);

}
