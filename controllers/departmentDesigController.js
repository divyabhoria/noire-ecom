const Dept_Desig = require("../models/department_desig");

// Create a new Dept_Desig entry
exports.create = async (req, res) => {
  try {
    const { deptid, desigid } = req.body;
    const deptDesig = await Dept_Desig.create({ deptid, desigid });
    res.status(201).json(deptDesig);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Dept_Desig entries
exports.findAll = async (req, res) => {
  try {
    const deptDesigs = await Dept_Desig.findAll();
    res.status(200).json(deptDesigs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific Dept_Desig entry by deptid and desigid
exports.findOne = async (req, res) => {
  try {
    const { deptid, desigid } = req.params;
    const deptDesig = await Dept_Desig.findOne({ where: { deptid, desigid } });

    if (deptDesig) {
      res.status(200).json(deptDesig);
    } else {
      res.status(404).json({ message: "Entry not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ✅ Fix: Added Update Function
exports.update = async (req, res) => {
  try {
    const { deptid, desigid } = req.params;
    const [updated] = await Dept_Desig.update(req.body, {
      where: { deptid, desigid },
    });

    if (updated) {
      const updatedDeptDesig = await Dept_Desig.findOne({
        where: { deptid, desigid },
      });
      res.status(200).json(updatedDeptDesig);
    } else {
      res.status(404).json({ message: "Entry not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a Dept_Desig entry by deptid and desigid
exports.delete = async (req, res) => {
  try {
    const { deptid, desigid } = req.params;
    const deleted = await Dept_Desig.destroy({ where: { deptid, desigid } });

    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: "Entry not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
