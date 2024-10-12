package com.CO_SCHOOL;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.coschool.dto.*;
import com.coschool.enums.Controle;
import com.coschool.enums.Semester;
import com.coschool.models.ClasseGroup;
import com.coschool.models.Examen;
import com.coschool.services.ClasseGroupService;
import com.coschool.services.EleveService;
import com.coschool.services.ExamenEleveService;
import com.coschool.services.ExamenService;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CoSchoolApplicationTests {

//	@Test
//	void contextLoads() {
//	}

    @Autowired
    private ClasseGroupService classeGroupService;

    @Autowired
    private ExamenEleveService examenEleveService;

    @Autowired
    private EleveService eleveService;

    @Autowired
    private ExamenService examenService;

//    @Test
//    public void testSave() {
//        ClasseGroup classeGroup = new ClasseGroup();
//        classeGroup.setClass_room_name("Test Class");
//        ClasseGroup savedClassGroup = classeGroupService.save(classeGroup);
//        assertNotNull(savedClassGroup);
//        assertEquals("Test Class", savedClassGroup.getClass_room_name());
//    }
//
//
//    @Test
//    public void testFindById() {
//        // Arrange
//        ClasseGroup classeGroup = new ClasseGroup();
//        classeGroup.setClass_room_name("Test Class");
//        classeGroup = classeGroupService.save(classeGroup);
//
//        // Act
//        ClasseGroup foundClassGroup = classeGroupService.findById(classeGroup.getId());
//
//        // Assert
//        assertNotNull(foundClassGroup);
//        assertEquals(classeGroup.getId(), foundClassGroup.getId());
//        assertEquals("Test Class", foundClassGroup.getClass_room_name());
//    }


//    @Test
//    public void testUpdateEleveNote() {
//        ExamenEleveNoteDto examenEleveNoteDto = new ExamenEleveNoteDto();
//        examenEleveNoteDto.setExamenNote(15.0);
//        Integer examenId = 4;
//        Integer eleveId = 3;
//        String result = examenEleveService.updateEleveNote(examenEleveNoteDto, examenId, eleveId);
//        assertEquals("the Note Added Successfully in the Eleve", result);
//    }
//
//    @Test
//    public void testGetResultEleve() {
//        Integer eleveId = 3;
//        String semester = "FIRST_SEMESTER";
//        Integer year = 2024;
//
//        List<ResultDto> resultList = examenEleveService.getResultEleve(eleveId, semester, year);
//        assertNotNull(resultList);
//        assertFalse(resultList.isEmpty());
//    }
//
//    @Test
//    public void testGetExamenDates() {
//        Integer eleveId = 3;
//        List<ExamenDateDto> examenDateList = examenEleveService.getExamenDates(eleveId);
//        assertNotNull(examenDateList);
//        assertFalse(examenDateList.isEmpty());
//    }
//
//    @Test
//    public void testCreateExaman() {
//
//        InsertExamenDto examenDto = new InsertExamenDto();
//        examenDto.setExamenName(Controle.DEUXIEME_CONTROLE);
//        examenDto.setExamenDate(LocalDate.now());
//        examenDto.setClassGroupId(1);
//        examenDto.setProfId(25);
//        examenDto.setMatter("Arabic");
//        examenDto.setSemester(Semester.FIRST_SEMESTER);
//
//        Examen createdExamen = examenService.CreateExaman(examenDto);
//
//        assertNotNull(createdExamen);
//        assertEquals(Controle.DEUXIEME_CONTROLE, createdExamen.getExamen_name());
//        assertEquals("Arabic", createdExamen.getMatter());
//    }
//
//    @Test
//    public void testGetExamenByProfId() {
//
//        Integer profId = 25;
//        List<Examen> examens = examenService.getExamenByProfId(profId);
//
//        assertNotNull(examens);
//        assertFalse(examens.isEmpty());
//    }
//
//    @Test
//    public void testGetExamenNotAssign() {
//        Integer profId = 25;
//        List<ExamenNameDto> examens = examenService.getExamenNotAssign(profId);
//        assertNotNull(examens);
//        assertFalse(examens.isEmpty());
//    }

}
