USE `hooks-4313186-beatriz-santos`;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Projetos_Empresa ( 
	id VARCHAR(5) PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL,
    title VARCHAR(50) NOT NULL,
    date DATE NOT NULL
);
