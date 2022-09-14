USE `hooks-4313186-beatriz-santos`;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE Projetos_Empresa ( 
	id VARCHAR(5) PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL,
    title VARCHAR(50) NOT NULL,
    date DATE NOT NULL
);

INSERT INTO Projetos_Empresa(id, name, title, date)
VALUE ('001', 'LabeSky', 'LSy', '2023/10/05'),
	  ('002', 'Labefy' , 'LFy', '2024/01/06'),
      ('003', 'AstroZoom', 'AZm', '2022/12/20');
