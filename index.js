const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "employeeTracker_db",
});

let roleChoices = [];

function getRolesArray() {
  connection.query("SELECT * FROM roles", (err, res) => {
    if (err) throw err;
    rolesArray = res;
    roleChoices = rolesArray.map((roles) => ({
      name: roles.title,
      value: roles.id,
    }));
  });
  console.log(roleChoices);
  return roleChoices;
}
getRolesArray();

let managerChoices = [];

function getManagersArray() {
  connection.query("SELECT * FROM employees", (err, res) => {
    if (err) throw err;
    employeesArray = res;
    managerObjects = employeesArray.filter(
      (manager) =>
        manager.role_id === 1 || manager.role_id === 3 || manager.role_id === 7
    );
    managerChoices = managerObjects.map((manager) => ({
      name: manager.last_name,
      value: manager.id,
    }));
    console.log(managerChoices);
    return managerChoices;
  });
}
getManagersArray();

// getUserOption();

// function getUserOption() {
//   inquirer
//     .prompt({
//       type: "list",
//       name: "userOption",
//       choices: [
//         "View all Employees",
//         "View all Employees by Department",
//         "View all employees by Manager",
//         "Add new Employee",
//         "Remove Employee",
//         "Update Employee Role",
//         "Update Employee Manager",
//         "Add new Role",
//         "Add new Department",
//         "Quit",
//       ],
//     })

//     .then((data) => {
//       if (data.userOption === "Add new Employee") {
//         insertEmployeeData();
//       } else if (data.userOption === "Add new Role") {
//         insertRoleData();
//       } else if (data.userOption === "Add new Department") {
//         insertDepartment();
//       }
//     });
// }

// function insertEmployeeData() {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "Enter Employee first name:",
//         name: "employeeFirstName",
//       },
//       {
//         type: "input",
//         message: "Enter Employee last name:",
//         name: "employeeLastName",
//       },
//       {
//         type: "list",
//         message: "Choose new employee's role:",
//         name: "employeeRole",
//         choices: roleChoices,
//       },
//       {
//         type: "list",
//         message: "Choose new employee's Manager:",
//         name: "employeeManager",
//         choices: managerChoices,
//       },
//     ])
//     .then((data) => {
//       connection.query(
//         "INSERT INTO employees SET ?",
//         {
//           first_name: data.employeeFirstName,
//           last_name: data.employeeLastName,
//           role_id: data.employeeRole,
//           manager_id: data.employeeManager,
//         },
//         (err, res) => {
//           if (err) throw err;
//           console.log(
//             `${res.affectedRows} new employee added to the database.\n`
//           );
//         }
//       );
//     });
// }

// function insertRoleData() {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "Enter Role Title:",
//         name: "roleTitle",
//       },
//       {
//         type: "input",
//         message: "Enter Role Salary:",
//         name: "roleSalary",
//       },
//     ])
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
//     .prompt({
//       type: "input",
//       message: "Enter new Department:",
//       name: "department",
//     })
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
