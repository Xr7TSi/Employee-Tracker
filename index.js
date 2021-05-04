const mysql = require("mysql");
const inquirer = require("inquirer");

const { userOptions, addEmployee } = require("./questions.js");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employeeTracker_db",
});

const employeeFirstName = null;
const employeeLastName = null;
const employeeRole = null;
const employeeDepartment = null;
const employeeSalary = null;
const employeeManager = null;

getUserOption();

function getUserOption() {
  inquirer.prompt(userOptions).then((data) => {
    if (data.userOption === "Add Employee") {
      getEmployeeData();
    }
  });
}

function getEmployeeData() {
  inquirer
    .prompt(addEmployee)
    .then((data) => {
      return inquirer.prompt(addEmployee).then((data) => {
        const employeeFirstName = data.employeeFirstName;
        const employeeLastName = data.employeeLastName;
        const employeeRole = data.employeeRoleId;
        const employeeDepartment = data.employeeDepartment;
        const employeeSalary = data.employeeSalary;
        const employeeManager = data.employeeManager;
      });
    })
    .then(() => addEmployeeData());
}

function addEmployeeData() {
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Adding new employee to database...\n");
    var sql =
      "INSERT INTO employees (first_name, last_name, role_name, manager_name) VALUES ('+employeeFirstName+', '+employeeLastName+', '+employeeRole+', '+employeeManager+'))";
  });
}
