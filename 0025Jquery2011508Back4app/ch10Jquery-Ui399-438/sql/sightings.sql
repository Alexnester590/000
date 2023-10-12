

create database sightings;
CREATE USER 'Alex'@'localhost' IDENTIFIED BY '1';
GRANT SELECT,INSERT,UPDATE,DELETE ON sightings.* TO 'Alex'@'localhost';
use sightings;

CREATE TABLE IF NOT EXISTS sightings (
  sighting_id INT NOT NULL AUTO_INCREMENT,
  sighting_date date NOT NULL,
  creature_type varchar(35) NOT NULL,
  creature_distance varchar(35) NOT NULL,
  creature_weight varchar(35) NOT NULL,
  creature_height varchar(35) NOT NULL,
  creature_color varchar(35) NOT NULL,   
  sighting_latitude varchar(10) NOT NULL,
  sighting_longitude varchar(10) NOT NULL,
  PRIMARY KEY(sighting_id)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
