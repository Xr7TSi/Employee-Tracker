


module.exports = {
  userOptions: {
    type: "list",
    name: "userOption",
    choices: [
      "View all Employees",
      "View all Employees by Department",
      "View all employees by Manager",
      "Add Employee",
      "Remove Employee",
      "Update Employee Role",
      "Update Employee Manager",
      "Add new Role",
      "Add new Department",
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
      message: "Choose Employee Role:",
      name: "employeeRole",
      choices: roles,
    },
    {
      type: "list",
      message: "Choose Employee Department:",
      name: "employeeDepartment",
      choices: ["Sales", "Engineering", "Finance", "Legal"],
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
      name: "newDepartment",
    },
  ],
  
};
