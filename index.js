const mysql = require("mysql");
const inquirer = require("inquirer");

const {
  userOptions,
  // addEmployee,
  // addRole,
  // addDepartment,
} = require("./questions.js");

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
    if (data.userOption === "Add new Employee") {
      insertEmployeeData();
    } else if (data.userOption === "Add new Role") {
      insertRoleData();
    } else if (data.userOption === "Add new Department") {
      insertDepartment();
    }
  });
}

const roleArray = [];

function insertEmployeeData() {
  connection.query("SELECT title FROM roles", (err, res) => {
    if (err) throw err;
    roleArray = JSON.stringify(res);
    console.log(roleArray);
  });
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter Employee first name:",
        name: "employeeFirstName",
      },
      {
        type: "input",
        message: "Enter Employee last name:",
        name: "employeeLastName",
      },
      {
        type: "list",
        message: "Choose new employee's role:",
        name: "employeeRole",
        choices: function () {
          let rolesChoices = roleArray[0].map((roles) => roles.title);
          return rolesChoices;
        },
      },
      {
        type: "list",
        message: "Choose new employee's Manager:",
        name: "employeeManager",
        choices: [],
      },
    ])
    .then((data) => {
      connection.query(
        "INSERT INTO employees SET ?",
        {
          first_name: data.employeeFirstName,
          last_name: data.employeeLastName,
          role_id: data.employeeRole,
          manager_id: data.employeeManager,
        },
        (err, res) => {
          if (err) throw err;
          console.log(
            `${res.affectedRows} new employee added to the database.\n`
          );
        }
      );
    });
}

// function insertEmployeeData() {
//   connection.query("SELECT title FROM roles", (err, res) => {
//     if (err) throw err;
//     let roleArray = JSON.stringify(res);
//     console.log(roleArray);
//   });
//   inquirer.prompt(addEmployee).then((data) => {
//     connection.query(
//       "INSERT INTO employees SET ?",
//       {
//         first_name: data.employeeFirstName,
//         last_name: data.employeeLastName,
//         role_id: data.employeeRole,
//         manager_id: data.employeeManager,
//       },
//       (err, res) => {
//         if (err) throw err;
//         console.log(
//           `${res.affectedRows} new employee added to the database.\n`
//         );
//       }
//     );
//   });
// }

// function insertRoleData() {
//   inquirer
//     .prompt(addRole)
//     .then((data) => {
//       connection.query(
//         "INSERT INTO roles SET ?",
//         {
//           title: data.roleTitle,
//           salary: data.roleSalary,
//         },
//         (err, res) => {
//           if (err) throw err;
//           console.log(`${res.affectedRows} new role added to the database.\n`);
//         }
//       );
//     })
//     .then(() => getUserOption());
// }

// function insertDepartment() {
//   inquirer
//     .prompt(addDepartment)
//     .then((data) => {
//       connection.query(
//         "INSERT INTO departments set ?",
//         {
//           department_name: data.department,
//         },
//         (err, res) => {
//           if (err) throw err;
//           console.log(`${res.affectedRows} new department to the database.\n`);
//         }
//       );
//     })
//     .then(() => getUserOption());
// }
