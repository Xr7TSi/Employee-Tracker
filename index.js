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

function getUserOption() {
  inquirer.prompt(userOptions).then((data) => {
    if ((data.userOption = "Add Employee")) {
      getEmployeeData();
    }
  });
}
getUserOption();

function getEmployeeData() {
  inquirer.prompt(addEmployee).then((data) => {
    const employeeFirstName = data.employeeFirstName;
    const employeeLastName = data.employeeLastName;
    const employeeRole = data.employeeRole;
    const employeeDepartment = data.employeeDepartment;
    const employeeSalary = data.employeeSalary;
    const employeeManager = data.employeeManager;
  });
}
