package com.CO_SCHOOL.services;

import com.CO_SCHOOL.models.Examen;
import com.CO_SCHOOL.repositories.ExamenRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamenService {

    @Autowired
    private ExamenRepo examenRepo;

    public Examen CreateExaman(Examen examen) {
        return examenRepo.save(examen);
    }

    public Examen GetExamanById(int id) {
        return examenRepo.findById(id).orElseThrow(()-> new RuntimeException("No examen found with id: " + id));
    }

    public List<Examen> getAllExamen() {
        return examenRepo.findAll();
    }

//    public List<Examen> getExamenByEleveId(Integer id) {
//        return examenRepo.findByIdEleve(id);
//    }

    public List<Examen> getExamenByProfId(Integer profId) {
        return examenRepo.findAllByProfesseurId(profId);
    }


    public Examen updateExaman(Examen examen) {
        return examenRepo.save(examen);
    }

}
