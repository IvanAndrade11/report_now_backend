create database report_now;
use report_now;

// TABLE USERS
create table users (id int(50) not null auto_increment primary key, name varchar(35));
ALTER TABLE `report_now`.`users` 
ADD COLUMN `user` VARCHAR(50) NOT NULL AFTER `name`,
ADD COLUMN `email` VARCHAR(50) NOT NULL AFTER `user`,
ADD COLUMN `phone` VARCHAR(15) NULL DEFAULT NULL AFTER `email`,
ADD COLUMN `password` VARCHAR(300) NOT NULL AFTER `phone`,
ADD COLUMN `admin` boolean NOT NULL AFTER `password`;

// TABLE NEWS
create table news (
  id int(50) not null auto_increment primary key, 
  title varchar(50),
  description varchar(150),
  likes int(10),
  id_author int(50),
  date varchar(10)
);

// TABLE IMAGES
create table images (
  id int(50) not null auto_increment primary key, 
  title varchar(50),
  src varchar(150),
  id_user int(50),
  id_news int(50)
);
