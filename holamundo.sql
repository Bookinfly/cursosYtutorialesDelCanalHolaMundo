create database holamundo;
show databases;
use holamundo;
CREATE TABLE animales(
id int,
tipo varchar(255),
estado varchar(255),
PRIMARY KEY (id)
);

INSERT INTO animales (tipo, estado) VALUES ('chanchito', 'feliz'); 
INSERT INTO animales (tipo, estado) VALUES ('dragon', 'feliz'); 
INSERT INTO animales (tipo, estado) VALUES ('felipe', 'triste'); 


ALTER TABLE animales MODIFY COLUMN id int auto_increment;

SHOW CREATE TABLE animales;
-- comentario
CREATE TABLE `animales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

SELECT * FROM animales WHERE estado = 'feliz';

SELECT * FROM animales WHERE estado = 'feliz' AND tipo = 'chanchito';

SELECT * FROM animales WHERE estado = 'feliz' OR tipo = 'chanchito';

SELECT * FROM animales;

UPDATE animales SET estado = 'feliz' where id = 4;

DELETE from animales where id = 1;


DELETE from animales where estado = 'feliz';
-- Error Code: 1007. Can't create database 'holamundo'; database exists

DELETE from animales where id = 3;

UPDATE animales set tipo = 'dragon' where id = 4;

UPDATE animales set id = 2 where id = 4;