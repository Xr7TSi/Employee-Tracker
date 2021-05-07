DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeesTracker_db;

USE employees_db;

CREATE TABLE departments (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE roles (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary INT UNSIGNED NOT NULL,
  department_id INT UNSIGNED NOT NULL,
  INDEX dep_ind (department_id),
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  INDEX role_ind (role_id),
  FOREIGN KEY (role_id) REFERENCES roles(id)
  manager_id INT UNSIGNED,
  INDEX man_ind (manager_id),
  FOREIGN KEY (manager_id) REFERENCES employees(id)); 


describe employees;
describe departments;
describe roles;

select * from employees;
select * from departments;
select * from roles;

drop table employees;
drop table roles;
drop table departments;


update employees
set first_name = 'New First Name'
where id = 8;

delete from employees where id = 8;

