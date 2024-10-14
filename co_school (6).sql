-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 14, 2024 at 05:05 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `co_school`
--

-- --------------------------------------------------------

--
-- Table structure for table `absence`
--

CREATE TABLE `absence` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `time` time DEFAULT NULL,
  `motif` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `eleve_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `absence`
--

INSERT INTO `absence` (`id`, `date`, `time`, `motif`, `status`, `eleve_id`) VALUES
(1, '2024-10-11', '09:00:00', 'sans motif', 1, 2),
(2, '2024-10-15', '09:00:00', 'maladie', 1, 2),
(3, '2024-10-02', '10:00:00', 'sans motif', 0, 2),
(4, '2024-10-04', '14:30:00', 'sans motif', 0, 2),
(5, '2024-10-14', '11:00:00', 'sss', 0, 2),
(6, '2024-10-14', '10:00:00', 'sans motif', 0, 4);

-- --------------------------------------------------------

--
-- Table structure for table `classe_group`
--

CREATE TABLE `classe_group` (
  `id` int(11) NOT NULL,
  `class_room_name` varchar(255) DEFAULT NULL,
  `school_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classe_group`
--

INSERT INTO `classe_group` (`id`, `class_room_name`, `school_name`) VALUES
(1, 'Developpement digital 201', 'CO-SCHOOL'),
(2, 'Developpement digital 202', 'CO-SCHOOL'),
(3, 'Developpement digital 206', 'CO-SCHOOL'),
(4, 'Developpement digital 209', 'CO-SCHOOL');

-- --------------------------------------------------------

--
-- Table structure for table `classe_professeur`
--

CREATE TABLE `classe_professeur` (
  `classe_id` int(11) NOT NULL,
  `professeur_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classe_professeur`
--

INSERT INTO `classe_professeur` (`classe_id`, `professeur_id`) VALUES
(1, 3),
(2, 6),
(3, 11),
(4, 13);

-- --------------------------------------------------------

--
-- Table structure for table `examen`
--

CREATE TABLE `examen` (
  `id` int(11) NOT NULL,
  `examen_name` varchar(50) DEFAULT NULL,
  `examen_date` date DEFAULT NULL,
  `matter` varchar(255) DEFAULT NULL,
  `semester` varchar(50) DEFAULT NULL,
  `assign` varchar(50) DEFAULT NULL,
  `prof_id` int(11) DEFAULT NULL,
  `class_group_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `examen`
--

INSERT INTO `examen` (`id`, `examen_name`, `examen_date`, `matter`, `semester`, `assign`, `prof_id`, `class_group_id`) VALUES
(1, 'PREMIER_CONTROLE', '2024-10-04', 'Math Applique', 'FIRST_SEMESTER', 'ASSIGN', 3, 1),
(3, 'DEUXIEME_CONTROLE', '2024-10-23', 'Math Applique', 'FIRST_SEMESTER', 'ASSIGN', 3, 1),
(4, 'PREMIER_CONTROLE', '2024-10-14', 'metier et formation', 'FIRST_SEMESTER', 'ASSIGN', 3, 1),
(5, 'DEUXIEME_CONTROLE', '2024-10-15', 'metier et formation', 'FIRST_SEMESTER', 'ASSIGN', 3, 1),
(6, 'PREMIER_CONTROLE', '2024-10-22', 'gestion des temps', 'FIRST_SEMESTER', 'ASSIGN', 3, 1),
(7, 'DEUXIEME_CONTROLE', '2024-10-25', 'gestion des temps', 'FIRST_SEMESTER', 'ASSIGN', 3, 1),
(8, 'PREMIER_CONTROLE', '2024-10-14', 'programmation oriente objet', 'FIRST_SEMESTER', 'ASSIGN', 3, 1),
(9, 'PREMIER_CONTROLE', '2024-10-16', 'programmation oriente objet', 'FIRST_SEMESTER', 'ASSIGN', 3, 1),
(10, 'PREMIER_CONTROLE', '2024-10-03', 'Ecma6', 'FIRST_SEMESTER', 'ASSIGN', 3, 1),
(11, 'DEUXIEME_CONTROLE', '2024-10-28', 'Ecma6', 'FIRST_SEMESTER', 'ASSIGN', 3, 1),
(12, 'PREMIER_CONTROLE', '2024-10-14', 'bases donnes (sql)', 'FIRST_SEMESTER', 'ASSIGN', 3, 1),
(13, 'DEUXIEME_CONTROLE', '2024-10-14', 'bases donnes (sql)', 'FIRST_SEMESTER', 'ASSIGN', 3, 1),
(14, 'PREMIER_CONTROLE', '2024-10-14', 'spring boot', 'FIRST_SEMESTER', 'ASSIGN', 3, 1),
(15, 'DEUXIEME_CONTROLE', '2024-10-14', 'spring boot', 'FIRST_SEMESTER', 'ASSIGN', 3, 1),
(16, 'DEUXIEME_CONTROLE', '2024-10-15', 'programmation oriente objet', 'FIRST_SEMESTER', 'ASSIGN', 3, 1),
(17, 'PREMIER_CONTROLE', '2024-10-14', 'bases donnes (sql)', 'FIRST_SEMESTER', 'INASSIGN', 11, 3),
(19, 'PREMIER_CONTROLE', '2024-10-14', 'gestion des temps', 'FIRST_SEMESTER', 'INASSIGN', 13, 4),
(21, 'PREMIER_CONTROLE', '2024-10-14', 'java', 'FIRST_SEMESTER', 'ASSIGN', 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `examen_eleve`
--

CREATE TABLE `examen_eleve` (
  `eleve_id` int(11) NOT NULL,
  `examen_id` int(11) NOT NULL,
  `examen_note` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `examen_eleve`
--

INSERT INTO `examen_eleve` (`eleve_id`, `examen_id`, `examen_note`) VALUES
(2, 1, 15),
(2, 3, 14),
(2, 4, 15),
(2, 5, 15),
(2, 6, 15),
(2, 7, 12),
(2, 8, NULL),
(2, 9, 17),
(2, 10, 14),
(2, 11, 17),
(2, 12, 10),
(2, 13, 15),
(2, 14, 15),
(2, 15, 12),
(2, 16, 13),
(2, 21, 15),
(4, 1, NULL),
(4, 3, NULL),
(4, 4, NULL),
(4, 5, NULL),
(4, 6, NULL),
(4, 7, NULL),
(4, 8, NULL),
(4, 9, NULL),
(4, 10, NULL),
(4, 11, NULL),
(4, 12, NULL),
(4, 13, NULL),
(4, 14, NULL),
(4, 15, NULL),
(4, 16, NULL),
(4, 21, 16),
(5, 1, NULL),
(5, 3, NULL),
(5, 4, NULL),
(5, 5, NULL),
(5, 6, NULL),
(5, 7, NULL),
(5, 8, NULL),
(5, 9, NULL),
(5, 10, NULL),
(5, 11, NULL),
(5, 12, NULL),
(5, 13, NULL),
(5, 14, NULL),
(5, 15, NULL),
(5, 16, NULL),
(5, 21, 15),
(12, 21, 18);

-- --------------------------------------------------------

--
-- Table structure for table `flyway_schema_history`
--

CREATE TABLE `flyway_schema_history` (
  `installed_rank` int(11) NOT NULL,
  `version` varchar(50) DEFAULT NULL,
  `description` varchar(200) NOT NULL,
  `type` varchar(20) NOT NULL,
  `script` varchar(1000) NOT NULL,
  `checksum` int(11) DEFAULT NULL,
  `installed_by` varchar(100) NOT NULL,
  `installed_on` timestamp NOT NULL DEFAULT current_timestamp(),
  `execution_time` int(11) NOT NULL,
  `success` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `flyway_schema_history`
--

INSERT INTO `flyway_schema_history` (`installed_rank`, `version`, `description`, `type`, `script`, `checksum`, `installed_by`, `installed_on`, `execution_time`, `success`) VALUES
(1, '1', 'create person and related tables', 'SQL', 'V1__create_person_and_related_tables.sql', 70303368, 'root', '2024-10-14 03:35:12', 36, 1);

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `id` int(11) NOT NULL,
  `identification_id` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `dtype` varchar(50) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `class_group_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`id`, `identification_id`, `username`, `age`, `gender`, `email`, `password`, `dtype`, `parent_id`, `class_group_id`) VALUES
(1, 'L132083785', 'oussama charafi', 23, 'M', 'ou.charafi@gmail.com', '$2a$10$yRKZ9A/bCpVrNhhDfGtSLOTrNqJIsVIn9KZpm9IPVhRjG/nwZITye', 'ADMIN', NULL, NULL),
(2, 'U613426', 'salma baouch', 21, 'F', 'salma.baouch@gmail.com', '$2a$10$p/FLozp7fEDXZ1xGHAaRQeM7fmePOSLYK1T7tJlRpT2wSLsg57tT6', 'ELEVE', NULL, 1),
(3, 'F097292', 'ibrahim zeroual', 29, 'M', 'ibrahim9@gmail.com', '$2a$10$KTdkmXqgfi8WuB5.M.VCgOGB5vFMttsVvP9ADlRbVOWOe22N9oBVu', 'PROFESSEUR', NULL, NULL),
(4, 'L720561', 'amine ketabi', 27, 'M', 'amine27@gmail.com', '$2a$10$PZbcXwx35BKUoi.jhNuzZetYKm3Nk1pE42qNM5ytUZ/wUaPKq/ZzW', 'ELEVE', NULL, 1),
(5, 'A301838', 'alaa arbaoui', 23, 'M', 'alaa_arbaoui@gmail.com', '$2a$10$.3wju6FVuZFXnX.d.nXRZ.UGnFWaj6fCphkwgxHj2TQM1NlS1kLaG', 'ELEVE', NULL, 1),
(6, 'T880445', 'khadija mekaoui', 23, 'F', 'khadija_mekaoui@gmail.com', '$2a$10$w1Bz76acIOKDDGJTlrB48uJSRgIXMIxqZk4hffNNALadrvjoX8Yiq', 'PROFESSEUR', NULL, NULL),
(7, 'I458645', 'najia knizi', 22, 'F', 'najia@gmail.com', '$2a$10$hS94rl7U5Bf2IraqHcldauocEWRuKDlocqPdTaygQy7DOVew.aWNK', 'ELEVE', NULL, 2),
(8, 'L473313', 'reda ouady', 23, 'M', 'reda@gmail.com', '$2a$10$U./DNQqRE2h/QmMmkZ30q.0kn1tU3yZNHpnuJEWS57KmkT7mo6XaC', 'ELEVE', NULL, 2),
(9, 'F918625', 'youssef cherqaoui', 23, 'M', 'youssef00@gmail.com', '$2a$10$NHa735O9iZndq.i/sxqRueOHMzPC3h6Qnan4TfBZOXVFA.Vimzu22', 'ELEVE', NULL, 2),
(10, 'V853667', 'mr youssef', 23, 'M', 'youssef@gmail.com', '$2a$10$/NPrlwc87RwLh4jvF9Daj.T1u3hrwfEoZ/z23VpLC1ZNgstcPP3ty', 'ELEVE', NULL, 2),
(11, 'M068703', 'mr fahd', 29, 'M', 'fahd@gmail.com', '$2a$10$4i1Y/u5lO18SwGKS43KfJODPfK/bbCUg8C3YdxyYgVudJO18iqmNa', 'PROFESSEUR', NULL, NULL),
(12, 'F270291', 'user', 20, 'M', 'user1@gmail.com', '$2a$10$mXyIjQrHZPx9xyxl08sOt.ZVpJNIflii0wT0rhdk1K59JNVDsjzkm', 'ELEVE', NULL, 1),
(13, 'M880721', 'prof', 20, 'M', 'prof@gmail.com', '$2a$10$TGxhqKBE1Xna5ezGKLNeMeCtBXZSFhyMHB.CyYEkQf5244A0Ymcfi', 'PROFESSEUR', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` int(11) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role`) VALUES
(1, 'ROLE_ADMIN'),
(3, 'ROLE_PROF'),
(2, 'ROLE_ELEVE'),
(4, 'ROLE_ELEVE'),
(5, 'ROLE_ELEVE'),
(6, 'ROLE_PROF'),
(7, 'ROLE_ELEVE'),
(8, 'ROLE_ELEVE'),
(9, 'ROLE_ELEVE'),
(10, 'ROLE_ELEVE'),
(11, 'ROLE_PROF'),
(12, 'ROLE_ELEVE'),
(13, 'ROLE_PROF');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `absence`
--
ALTER TABLE `absence`
  ADD PRIMARY KEY (`id`),
  ADD KEY `eleve_id` (`eleve_id`);

--
-- Indexes for table `classe_group`
--
ALTER TABLE `classe_group`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `classe_professeur`
--
ALTER TABLE `classe_professeur`
  ADD PRIMARY KEY (`classe_id`,`professeur_id`),
  ADD KEY `professeur_id` (`professeur_id`);

--
-- Indexes for table `examen`
--
ALTER TABLE `examen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `prof_id` (`prof_id`),
  ADD KEY `class_group_id` (`class_group_id`);

--
-- Indexes for table `examen_eleve`
--
ALTER TABLE `examen_eleve`
  ADD PRIMARY KEY (`eleve_id`,`examen_id`),
  ADD KEY `examen_id` (`examen_id`);

--
-- Indexes for table `flyway_schema_history`
--
ALTER TABLE `flyway_schema_history`
  ADD PRIMARY KEY (`installed_rank`),
  ADD KEY `flyway_schema_history_s_idx` (`success`);

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `identification_id` (`identification_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `username_2` (`username`),
  ADD KEY `parent_id` (`parent_id`),
  ADD KEY `class_group_id` (`class_group_id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `absence`
--
ALTER TABLE `absence`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `classe_group`
--
ALTER TABLE `classe_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `examen`
--
ALTER TABLE `examen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `person`
--
ALTER TABLE `person`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `absence`
--
ALTER TABLE `absence`
  ADD CONSTRAINT `absence_ibfk_1` FOREIGN KEY (`eleve_id`) REFERENCES `person` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `classe_professeur`
--
ALTER TABLE `classe_professeur`
  ADD CONSTRAINT `classe_professeur_ibfk_1` FOREIGN KEY (`classe_id`) REFERENCES `classe_group` (`id`),
  ADD CONSTRAINT `classe_professeur_ibfk_2` FOREIGN KEY (`professeur_id`) REFERENCES `person` (`id`);

--
-- Constraints for table `examen`
--
ALTER TABLE `examen`
  ADD CONSTRAINT `examen_ibfk_1` FOREIGN KEY (`prof_id`) REFERENCES `person` (`id`),
  ADD CONSTRAINT `examen_ibfk_2` FOREIGN KEY (`class_group_id`) REFERENCES `classe_group` (`id`);

--
-- Constraints for table `examen_eleve`
--
ALTER TABLE `examen_eleve`
  ADD CONSTRAINT `examen_eleve_ibfk_1` FOREIGN KEY (`eleve_id`) REFERENCES `person` (`id`),
  ADD CONSTRAINT `examen_eleve_ibfk_2` FOREIGN KEY (`examen_id`) REFERENCES `examen` (`id`);

--
-- Constraints for table `person`
--
ALTER TABLE `person`
  ADD CONSTRAINT `person_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `person` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `person_ibfk_2` FOREIGN KEY (`class_group_id`) REFERENCES `classe_group` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `person` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
