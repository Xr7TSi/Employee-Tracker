module.exports = {
  userOptions: {
    type: "list",
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
  },

  addEmployee: [
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
      message: "What is the new employee's role:",
      name: "employeeRole",
      choices: [],
    },
    {
      type: "input",
      message: "Who is the new employee's Manager:",
      name: "employeeManager",
    },
  ],

  addRole: [
    {
      type: "input",
      message: "Enter Role Title:",
      name: "roleTitle",
    },
    {
      type: "input",
      message: "Enter Role Salary:",
      name: "roleSalary",
    },
  ],

  addDepartment: [
    {
      type: "input",
      message: "Enter new Department:",
      name: "department",
    },
  ],
};
