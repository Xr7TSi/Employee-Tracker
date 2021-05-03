CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employees(
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id int NOT NULL,
    manager_id int,
    PRIMARY KEY (id),
);

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT NOT NULL,
    name varchar(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT NOT NULL,
    title varchar(30) NOT NULL,
    salary decimal NOT NULL,
    department_id int NOT NULL,
    PRIMARY KEY (id),
);

