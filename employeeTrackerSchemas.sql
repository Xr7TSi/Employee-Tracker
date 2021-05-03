CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employees(
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name varchar(30)
    last_name varchar(30)
    role_id int
    manager_id int
    PRIMARY KEY (id)
);

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT NOT NULL,
    name varchar(30)
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT NOT NULL,
    title varchar(30)
    salary decimal
    department_id int
    PRIMARY KEY (id)
);

