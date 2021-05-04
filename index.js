const mysql = require("mysql");
const inquirer = require("inquirer");

const { userOptions, addEmployee, addRole, roles } = require("./questions.js");

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
      appendRole();
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
          role_name: data.employeeRole,
          manager_name: data.employeeManager,
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

function appendRole() {
  inquirer
    .prompt(addRole)
    .then((data) => {
      console.log(data.newRole);
      roles.push(data.newRole),
        (err, res) => {
          if (err) throw err;
          console.log(`Role ${res.newRole} added`);
        };
    })
    .then(() => getUserOption());
}

