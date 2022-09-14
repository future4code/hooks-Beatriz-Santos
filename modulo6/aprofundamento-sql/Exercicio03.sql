-- Active: 1659394409919@@35.226.146.116@3306@hooks-4313186-beatriz-santos
USE `hooks-4313186-beatriz-santos`;
SET SQL_SAFE_UPDATES = 0;
ALTER TABLE Projetos_Empresa
DROP COLUMN title;

ALTER TABLE Projetos_Empresa
CHANGE date dueDate DATE NOT NULL;
ALTER TABLE Funcionarios
MODIFY email VARCHAR(50) UNIQUE;
DESCRIBE Funcionarios;