CREATE TABLE IF NOT EXISTS classe_group (
    id INT PRIMARY KEY AUTO_INCREMENT,
    class_room_name VARCHAR(255),
    school_name VARCHAR(255)
    );

CREATE TABLE IF NOT EXISTS person (
    id INT PRIMARY KEY AUTO_INCREMENT,
    identification_id VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    age INT,
    gender VARCHAR(50),
    email VARCHAR(255),
    password VARCHAR(255),
    dtype VARCHAR(50),
    parent_id INT,
    class_group_id INT,
    UNIQUE (username),
    FOREIGN KEY (parent_id) REFERENCES person(id) ON DELETE CASCADE,
    FOREIGN KEY (class_group_id) REFERENCES classe_group(id) ON DELETE SET NULL
    );

CREATE TABLE IF NOT EXISTS user_roles (
    user_id INT,
    role VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES person(id) ON DELETE CASCADE
    );

CREATE TABLE IF NOT EXISTS classe_group (
    id INT PRIMARY KEY AUTO_INCREMENT,
    class_room_name VARCHAR(255),
    school_name VARCHAR(255)
    );
CREATE TABLE IF NOT EXISTS examen (
    id INT PRIMARY KEY AUTO_INCREMENT,
    examen_name VARCHAR(50),
    examen_date DATE,
    matter VARCHAR(255),
    semester VARCHAR(50),
    assign VARCHAR(50),
    prof_id INT,
    class_group_id INT,
    FOREIGN KEY (prof_id) REFERENCES person(id),
    FOREIGN KEY (class_group_id) REFERENCES classe_group(id)
    );


CREATE TABLE IF NOT EXISTS classe_professeur (
    classe_id INT,
    professeur_id INT,
    PRIMARY KEY (classe_id, professeur_id),
    FOREIGN KEY (classe_id) REFERENCES classe_group(id),
    FOREIGN KEY (professeur_id) REFERENCES person(id)
    );


CREATE TABLE IF NOT EXISTS examen_eleve (
    eleve_id INT,
    examen_id INT,
    examen_note DOUBLE,
    PRIMARY KEY (eleve_id, examen_id),
    FOREIGN KEY (eleve_id) REFERENCES person(id),
    FOREIGN KEY (examen_id) REFERENCES examen(id)
    );


CREATE TABLE IF NOT EXISTS absence (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date DATE,
    time TIME,
    motif VARCHAR(255),
    status BOOLEAN,
    eleve_id INT,
    FOREIGN KEY (eleve_id) REFERENCES person(id) ON DELETE CASCADE
    );
