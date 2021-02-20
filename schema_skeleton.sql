DROP DATABASE IF EXISTS date_ideas;

CREATE DATABASE date_ideas;

USE date_ideas;

CREATE TABLE authors (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(80) NOT NULL,
    email varchar(150) NOT NULL,
    location 
    PRIMARY KEY (id)
);

CREATE TABLE posts (
    id int NOT NULL AUTO_INCREMENT,
    activity_category
    activity_name varchar(30) NOT NULL,
    activity_description varchar(350) NOT NULL,
    rating decimal,
    cost integer,
    city varchar(50)
    state varchar(2)
    PRIMARY KEY (id)
    FOREIGN KEY authors (id)
);

