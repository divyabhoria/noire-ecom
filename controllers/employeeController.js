const { Employee } = require("../models"); // Import the Employee model

// Create a new Employee
exports.createEmployee = async (req, res) => {
  try {
    // Destructure the body to get all the fields we need
    const {
      FName,
      LName,
      Deptid,
      Desigid,
      Address,
      doj,
      stateid,
      countryid,
      regionid,
      userid,
    } = req.body;

    // Use Sequelize to create the new Employee record
    const newEmployee = await Employee.create({
      FName,
      LName,
      Deptid,
      Desigid,
      Address,
      doj,
      stateid,
      countryid,
      regionid,
      userid,
    });

    // Return a response if successful
    return res.status(201).json({
      message: "Employee created successfully",
      employee: newEmployee,
    });
  } catch (error) {
    // Handle errors if the creation fails
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to create employee", error: error.message });
  }
};

// Get all Employees
exports.getAllEmployees = async (req, res) => {
  try {
    // Retrieve all employees from the database
    const employees = await Employee.findAll();

    // If no employees found, return a message
    if (employees.length === 0) {
      return res.status(404).json({ message: "No employees found" });
    }

    // Return the list of employees
    return res.status(200).json(employees);
  } catch (error) {
    // Handle errors if fetching employees fails
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to fetch employees", error: error.message });
  }
};

// Get a single Employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employeeId = req.params.id;

    // Find an employee by primary key (Empid)
    const employee = await Employee.findByPk(employeeId);

    // If no employee is found, return a 404 error
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Return the found employee
    return res.status(200).json(employee);
  } catch (error) {
    // Handle errors if fetching the employee fails
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to fetch employee", error: error.message });
  }
};

// Update an existing Employee by ID
exports.updateEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const {
      FName,
      LName,
      Deptid,
      Desigid,
      Address,
      doj,
      stateid,
      countryid,
      regionid,
      userid,
    } = req.body;

    // Find the employee by primary key
    const employee = await Employee.findByPk(employeeId);

    // If employee not found, return a 404 error
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Update the employee's fields
    employee.FName = FName || employee.FName;
    employee.LName = LName || employee.LName;
    employee.Deptid = Deptid || employee.Deptid;
    employee.Desigid = Desigid || employee.Desigid;
    employee.Address = Address || employee.Address;
    employee.doj = doj || employee.doj;
    employee.stateid = stateid || employee.stateid;
    employee.countryid = countryid || employee.countryid;
    employee.regionid = regionid || employee.regionid;
    employee.userid = userid || employee.userid;

    // Save the updated employee record
    await employee.save();

    // Return the updated employee
    return res.status(200).json({
      message: "Employee updated successfully",
      employee,
    });
  } catch (error) {
    // Handle errors if updating the employee fails
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to update employee", error: error.message });
  }
};

// Delete an Employee by ID
exports.deleteEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;

    // Find the employee by primary key
    const employee = await Employee.findByPk(employeeId);

    // If employee not found, return a 404 error
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    // Destroy (delete) the employee record
    await employee.destroy();

    // Return a confirmation message
    return res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    // Handle errors if deleting the employee fails
    console.error(error);
    return res
      .status(500)
      .json({ message: "Failed to delete employee", error: error.message });
  }
};

