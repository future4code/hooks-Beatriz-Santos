ALTER TABLE Projetos_Empresa
ADD description VARCHAR(100) NOT NULL ;

UPDATE Projetos_Empresa
SET description = 'Projeto de sistema em nuvem da Labenu.'
WHERE id = '001';

UPDATE Projetos_Empresa
SET description = 'Projeto de sistema de gerenciamento de músicas da Labenu.'
WHERE id = '002';

UPDATE Projetos_Empresa
SET description = 'Projeto de rede de comunicação da Labenu.'
WHERE id = '003';