package com.CO_SCHOOL;

import com.CO_SCHOOL.models.ClasseGroup;
import com.CO_SCHOOL.services.ClasseGroupService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class CoSchoolApplicationTests {

//	@Test
//	void contextLoads() {
//	}

    @Autowired
    private ClasseGroupService classeGroupService;

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

}
