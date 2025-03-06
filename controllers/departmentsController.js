const Departments = require("../models/department");

// Create a new department
exports.create = async (req, res) => {
  try {
    const department = await Departments.create({ dname: req.body.dname });
    res.status(201).json(department);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all departments
exports.findAll = async (req, res) => {
  try {
    const departments = await Departments.findAll();
    res.json(departments); // `status(200)` is default for `.json()`
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a department by ID
exports.findOne = async (req, res) => {
  try {
    const deptid = parseInt(req.params.deptid, 10); // Ensure it's a number
    const department = await Departments.findByPk(deptid);
    department
      ? res.json(department)
      : res.status(404).json({ message: "Department not found" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a department by ID
exports.update = async (req, res) => {
  try {
    const deptid = parseInt(req.params.deptid, 10);
    const [updated] = await Departments.update(req.body, { where: { deptid } });

    updated
      ? res.json(await Departments.findByPk(deptid))
      : res.status(404).json({ message: "Department not found" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a department by ID
exports.delete = async (req, res) => {
  try {
    const deptid = parseInt(req.params.deptid, 10);
    const deleted = await Departments.destroy({ where: { deptid } });

    deleted
      ? res.json({ message: "Department deleted successfully" })
      : res.status(404).json({ message: "Department not found" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
