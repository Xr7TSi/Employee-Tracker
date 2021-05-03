module.exports = {
  userOptions: {
    type: "list",
    name: "userActivity",
    choices: [
      "View all Employees",
      "View all Employees by Department",
      "View all employees by Manager",
      "Add Employee",
      "Remove Employee",
      "Update Employee Role",
      "Update Employee Manager",
    ],
  },

  addEmployee: [
    {
      type: "input",
      message: "Enter Employee first name.",
      name: "firstName",
    },
    {
      type: "input",
      message: "Enter Employee last name.",
      name: "lastName",
    },
  ],
};
