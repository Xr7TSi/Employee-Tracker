const mysql = require("mysql");
const inquirer = require("inquirer");

const { userOptions, addEmployee, addRole, addDepartment } = require("./questions.js");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employeeTracker_db",
});

getUserOption();

function getUserOption() {
  inquirer.prompt(userOptions).then((data) => {
    if (data.userOption === "Add Employee") {
      insertEmployeeData();
    } else if (data.userOption === "Add new Role") {
      insertRoleData();
    } else if (data.userOption === "Add new Department") {
      addDepartment();
    }
  });
}

function insertEmployeeData() {
  inquirer
    .prompt(addEmployee)
    .then((data) => {
      connection.query(
        "INSERT INTO employees SET ?",
        {
          first_name: data.employeeFirstName,
          last_name: data.employeeLastName,
        },
        (err, res) => {
          if (err) throw err;
          console.log(
            `${res.affectedRows} new employee added to the database.\n`
          );
        }
      );
    })
    .then(() => getUserOption());
}

function insertRoleData() {
  inquirer
    .prompt(addRole)
    .then((data) => {
      connection.query(
        "INSERT INTO roles SET ?",
        {
          title: data.roleTitle,
          salary: data.roleSalary,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} new role added to the database.\n`);
        }
      );
    })
    .then(() => getUserOption());
}

function addDepartment() {
  inquirer
    .prompt(addDepartment)
    .then((data) => {
      connection.query(
        "INSERT INTO departments set ?",
        {
          department_name: data.department,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} new department to the database.\n`);
        }
      );
    })
    .then(() => getUserOption());
}
