package com.CO_SCHOOL.services;

import com.CO_SCHOOL.dto.EleveAbsenceDto;
import com.CO_SCHOOL.enums.Role;
import com.CO_SCHOOL.exeptions.CoEcoSchoolExepion;
import com.CO_SCHOOL.models.Eleve;
import com.CO_SCHOOL.models.Professeur;
import com.CO_SCHOOL.repositories.EleveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.*;
import java.util.stream.Collectors;


@Service
public class EleveService {
    private static final String LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final int NUMBER_LENGTH = 6;
    private static final SecureRandom RANDOM = new SecureRandom();

    @Autowired
    private EleveRepo eleveRepo;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    public Map<String , String> insertEleve(Eleve eleve) {
        eleve.setPassword(passwordEncoder.encode(eleve.getPassword()));
        Set<Role> roles = new HashSet<>();
        roles.add(Role.ROLE_ELEVE);
        eleve.setRoles(roles);
        String username = eleve.getUsername();
        eleve.setUsername(username.toLowerCase().trim());
        eleve.setIdentificationId(generateUniqueIdentificationId());

        eleveRepo.save(eleve);
        Map<String , String> map = new HashMap<>();
        map.put("msg" ,"The Eleve added successfully" );

        return map;
    }

    private String generateUniqueIdentificationId() {
        String identificationId;
        do {
            identificationId = generateIdentificationId();
        } while (eleveRepo.existsByIdentificationId(identificationId));
        return identificationId;
    }

    private String generateIdentificationId() {
        StringBuilder sb = new StringBuilder();

        char letter = LETTERS.charAt(RANDOM.nextInt(LETTERS.length()));
        sb.append(letter);

        for (int i = 0; i < NUMBER_LENGTH; i++) {
            sb.append(RANDOM.nextInt(10));
        }

        return sb.toString();
    }

    public Eleve getEleveById(Integer id) {
        return eleveRepo.findById(id).orElseThrow(()-> new CoEcoSchoolExepion("No Eleve found with id: " + id));
    }

    public Eleve getEleveByIdentity(Integer id) {
        return eleveRepo.findEleveById(id);
    }

//    public String UpdatePassword(Integer id , Eleve eleve) {
//        Eleve eleve1 = eleveRepo.findById(id).orElseThrow();
//        eleve1.setPassword(passwordEncoder.encode(eleve.getPassword()));
//        eleveRepo.save(eleve1);
//        return "The password updated successfully";
//    }

    public List<Eleve> GetAllElevesByClasseId(Integer id) {
        return eleveRepo.findEleveByClasseGroupId(id);
    }

    public List<Eleve> getAllEleves() {
        return eleveRepo.getAllEleve();
    }
    public List<Eleve> getAllElevesByClassGroupId(Integer id) {
        return eleveRepo.findEleveByClasseGroupId(id);
    }

//
//    public List<EleveAbsenceDto> getEleveAbsenceById(Integer id) {
//        return eleveRepo.getEleveAbsenceById(id);
//    }

    public List<EleveAbsenceDto> getEleveAbsenceById(Integer id) {
        List<Object[]> listEleves = eleveRepo.getEleveAbsenceById(id);
        return mapToEleveAbsenceDtoList(listEleves);
    }

    public List<EleveAbsenceDto> getEleveAbsence() {
        List<Object[]> listElevesSansId = eleveRepo.getEleveAbsence();
        return mapToEleveAbsenceDtoList(listElevesSansId);
    }

    // Helper method to map Object[] to List<EleveAbsenceDto>
    private List<EleveAbsenceDto> mapToEleveAbsenceDtoList(List<Object[]> listEleves) {
        return listEleves.stream().map(eleve -> {
            Integer idEleve = (Integer) eleve[0];
            String identificationId = eleve[1].toString();
            String username = eleve[2].toString();
            String email = eleve[3].toString();
            String gender = eleve[4].toString();
            Integer age = (Integer) eleve[5];
            Long totalAbsences = ((Number) eleve[6]).longValue();

            return new EleveAbsenceDto(idEleve, identificationId, username, email, gender, age, totalAbsences);
        }).collect(Collectors.toList());
    }


    public Map<String, String> updateEleve(Integer id, Eleve eleve) {
        Eleve updatedEleve = eleveRepo.findEleveById(id);
        if (updatedEleve != null) {
            updatedEleve.setUsername(eleve.getUsername());

            if (eleve.getPassword() != null){
                String encodedPassword = passwordEncoder.encode(eleve.getPassword());
                updatedEleve.setPassword(encodedPassword);
            }
            updatedEleve.setRoles(eleve.getRoles());
            updatedEleve.setClasseGroup(eleve.getClasseGroup());
            updatedEleve.setAge(eleve.getAge());
            updatedEleve.setEmail(eleve.getEmail());
            updatedEleve.setGender(eleve.getGender());
            eleveRepo.save(updatedEleve);

            Map<String, String> map = new HashMap<>();
            map.put("msg", "The Eleve updated successfully");
            return map;
        } else {
            Map<String, String> errorMap = new HashMap<>();
            errorMap.put("error", "Eleve not found with ID: " + id);
            return errorMap;
        }
    }



}
