DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employees(
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    role_id int,
    manager_id int,
    PRIMARY KEY (id)
);

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT NOT NULL,
    department_name varchar(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT NOT NULL,
    title varchar(30) NOT NULL,
    salary decimal NOT NULL,
    department_id int,
    PRIMARY KEY (id)
);

describe employees;
describe departments;
describe roles;


select * from employees;
select * from departments;
select * from roles;



update employees
set first_name = 'New First Name'
where id = 8;

delete from employees where id = 8;

