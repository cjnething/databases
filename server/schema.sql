DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER NOT NULL,
  Text VARCHAR(140) NOT NULL,
  CreatedTime DATETIME(6) NOT NULL,
  id_Users INTEGER NOT NULL,
  id_Rooms INTEGER NOT NULL,
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INTEGER NOT NULL,
  Name VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS rooms;
CREATE TABLE rooms (
  id INTEGER NOT NULL,
  Name VARCHAR(20) NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE messages ADD FOREIGN KEY (id_Users) REFERENCES users (id);
ALTER TABLE messages ADD FOREIGN KEY (id_Rooms) REFERENCES rooms (id);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

