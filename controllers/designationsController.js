const Designations = require("../models/designation");

// Create a new designation
exports.create = async (req, res) => {
  try {
    const designation = await Designations.create({
      desigName: req.body.desigName,
    });
    res.status(201).json(designation);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all designations
exports.findAll = async (req, res) => {
  try {
    const designations = await Designations.findAll();
    res.status(200).json(designations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a designation by ID
exports.findOne = async (req, res) => {
  try {
    const designation = await Designations.findByPk(req.params.desigid);
    if (designation) {
      res.status(200).json(designation);
    } else {
      res.status(404).json({ message: "Designation not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a designation by ID
exports.update = async (req, res) => {
  try {
    const [updated] = await Designations.update(req.body, {
      where: { desigid: req.params.desigid },
    });
    if (updated) {
      const updatedDesignation = await Designations.findByPk(
        req.params.desigid
      );
      res.status(200).json(updatedDesignation);
    } else {
      res.status(404).json({ message: "Designation not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a designation by ID
exports.delete = async (req, res) => {
  try {
    const deleted = await Designations.destroy({
      where: { desigid: req.params.desigid },
    });
    if (deleted) {
      res.status(204).json({ message: "Designation deleted" });
    } else {
      res.status(404).json({ message: "Designation not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
