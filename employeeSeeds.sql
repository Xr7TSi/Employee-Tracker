CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employees(
    first_name varchar(30)
    last_name varchar(30)
    role_id int
    manager_id int
);

CREATE TABLE departments (
    name varchar(30)
);

CREATE TABLE roles (
    title varchar(30)
    salary decimal
    department_id int
);

