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
// creates an array of choices from the roles table that will be used by inquirer for determining new employee role. Runs at app launch.
function getRolesArray() {
  connection.query("SELECT * FROM roles", (err, res) => {
    if (err) throw err;
    rolesArray = res;
    roleChoices = rolesArray.map((roles) => ({
      name: roles.title,
      value: roles.id,
    }));
  });
  return roleChoices;
}
getRolesArray();

let departmentChoices = [];
// creates an array of choices from the departments table that will be used by inquirer for adding new employee role. Runs at app launch.
function getDepartmentsArray() {
  connection.query("SELECT * FROM departments", (err, res) => {
    if (err) throw err;
    departmentsArray = res;
    // console.log(departmentsArray)
    departmentChoices = departmentsArray.map((departments) => ({
      name: departments.name,
      value: departments.id,
    }));
  });
  return departmentChoices;
}
getDepartmentsArray();

let managerChoices = [];
// creates an array of choices from the employees table that will be used by inquirer for determining new employee manager.  Runs at app launch.
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
    return managerChoices;
  });
}
getManagersArray();

let employeeChoices = [];
// creates an array of choices from the employees table that will be used by inquirer for updating an employee's role.  Runs at app launch.
function getEmployeesNamesArray() {
  connection.query("SELECT * FROM employees", (err, res) => {
    if (err) throw err;
    employeesNamesArray = res;
    employeeChoices = employeesNamesArray.map((employee) => ({
      name: employee.first_name + employee.last_name,
      value: employee.id,
    }));
    return employeeChoices;
  });
}
getEmployeesNamesArray();

// uses inquirer to find which task user wants to perform
function getUserOption() {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      name: "userOption",
      choices: [
        "View all Employees",
        "View all Employees by Department",
        "View all employees by Manager",
        "Add new Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "Add new Role",
        "Add new Department",
        "Quit",
      ],
    })
    .then((data) => {
      if (data.userOption === "Add new Employee") {
        insertEmployeeData();
      } else if (data.userOption === "Add new Role") {
        insertRoleData();
      } else if (data.userOption === "Add new Department") {
        insertDepartment();
      } else if (data.userOption === "Update Employee Role") {
        updateEmployeeRole();
      }
    });
}
getUserOption();

function updateEmployeeRole() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Select the employee you'd like to update",
        name: "employeeGetsNewRole",
        choices: employeeChoices,
      },
      {
        type: "list",
        message: "Select the employee's new role",
        name: "newEmployeeRole",
        choices: roleChoices,
      },
    ])
    .then((data) => {
      connection.query(
        "Update employees SET ? WHERE ?",
        [
          {
            role_id: data.newEmployeeRole,
          },
          {
            id: data.employeeGetsNewRole,
          },
        ],
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} employee role updated\n`);
        }
      );
    })
    .then(() => getUserOption());
}

// adds new employee to database
function insertEmployeeData() {
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
        choices: roleChoices,
      },
      {
        type: "list",
        message: "Choose new employee's Manager:",
        name: "employeeManager",
        choices: managerChoices,
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
    })
    .then(() => getUserOption());
}

// inserts new role into roles table
function insertRoleData() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter Role Title:",
        name: "roleTitle",
      },
      {
        type: "list",
        message: "Select Department:",
        name: "roleDepartment",
        choices: departmentChoices,
      },
      {
        type: "input",
        message: "Enter Role Salary:",
        name: "roleSalary",
      },
    ])
    .then((data) => {
      connection.query(
        "INSERT INTO roles SET ?",
        {
          title: data.roleTitle,
          department_id: data.roleDepartment,
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

// inserts new department into departments table
function insertDepartment() {
  inquirer
    .prompt({
      type: "input",
      message: "Enter new Department name:",
      name: "department",
    })
    .then((data) => {
      connection.query(
        "INSERT INTO departments set ?",
        {
          name: data.department,
        },
        (err, res) => {
          if (err) throw err;
          console.log(
            `${res.affectedRows} new department added to the database.\n`
          );
        }
      );
    })
    .then(() => getUserOption());
}
