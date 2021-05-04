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

// const employeeFirstName = null;
// const employeeLastName = null;
// const employeeRole = null;
// const employeeDepartment = null;
// const employeeSalary = null;
// const employeeManager = null;

// const employeeFirstName = "Jonathan";
// const employeeLastName = "Rein";
// const employeeRole = "Software Engineer";
// const employeeDepartment = null;
// const employeeSalary = 100000;
// const employeeManager = "Gus Fring";

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
          console.log(`${res.affectedRows} added new employee to database.\n`);
        }
      );
    })
    .then(getUserOption());
}
