INSERT INTO departments
(name)
VALUES
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO roles
(title, salary, department_id)
VALUES
('Sales Lead', 900000, 1),
('Salesperson', 65000, 1),
('Lead Engineer', 130000, 2),
('Software Engineer', 90000, 2),
('Account Manager', 87000, 3),
('Accountant', 65000, 3),
('Legal Team Lead', 150000, 4),
('Lawyer', 110000, 4);

INSERT INTO employees
(first_name, last_name, role_id, manager_id)
VALUES
('Lydia', 'Rodarte-Quale', 7, null),
('Gus', 'Fring', 7, null)


INSERT INTO employees
(first_name, last_name, role_id, manager_id)
VALUES
('Walter', 'White', 3, 2),
('Gail', 'Boetticher', 4, 2),
('Jesse', 'Pinkman', 2, 2),
('Mike', 'Ehrmantrout', 6, 1)


INSERT INTO departments
(name)
VALUES
('Construction'),


  





