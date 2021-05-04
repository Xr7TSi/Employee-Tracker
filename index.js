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

let employeeFirstName = null;
let employeeLastName = null;
let employeeRole = null;
let employeeDepartment = null;
let employeeSalary = null;
let employeeManager = null;

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
    let employeeFirstName = data.employeeFirstName;
    let employeeLastName = data.employeeLastName;
    let employeeRole = data.employeeRoleId;
    let employeeDepartment = data.employeeDepartment;
    let employeeSalary = data.employeeSalary;
    let employeeManager = data.employeeManager;
  });
}

const addEmployee = () => {
  console.log("Adding new employee to database...\n");
  const query = connection.query("UPDATE employees SET ? WHERE ?", [
    {
      first_name: employeeFirstName,
    },
    {
      last_name: employeeLastName,
    },
    {
      role_name: employeeRole,
    },
    {
      manager_name: employeeManager,
    },
  ]);
};

const addNewDepartment = () => {
  console.log("Adding new Department...\n");
  const query = connection.query(
    // update format probably incorrect
    "UPDATE departments SET ? WHERE ?",
    [
      {
        // department_name = Need to add inquirer question for this
      },
    ]
  );
};

const addNewRole = () => {
  console.log("Adding new Role...\n");
  const query = connection.query("UPDATE roles SET ? WHERE ?", [
    [
      // role_name = Need to add inquirer question for this
    ],
  ]);
};
