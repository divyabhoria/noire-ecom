const Country_State = require("../models/country_state");

// Create a new country-state relationship
exports.create = async (req, res) => {
  try {
    const { countryid, stateid } = req.body;
    const countryState = await Country_State.create({ countryid, stateid });
    res.status(201).json(countryState);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all country-state relationships
exports.findAll = async (req, res) => {
  try {
    const countryStates = await Country_State.findAll();
    res.status(200).json(countryStates);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a country-state relationship by countryid and stateid
exports.findOne = async (req, res) => {
  try {
    const { countryid, stateid } = req.params;
    const countryState = await Country_State.findOne({
      where: { countryid, stateid },
    });
    if (countryState) {
      res.status(200).json(countryState);
    } else {
      res.status(404).json({ message: "Country-State relationship not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a country-state relationship by countryid and stateid
exports.update = async (req, res) => {
  try {
    const { countryid, stateid } = req.params;
    const [updated] = await Country_State.update(req.body, {
      where: { countryid, stateid },
    });
    if (updated) {
      const updatedCountryState = await Country_State.findOne({
        where: { countryid, stateid },
      });
      res.status(200).json(updatedCountryState);
    } else {
      res.status(404).json({ message: "Country-State relationship not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a country-state relationship by countryid and stateid
exports.delete = async (req, res) => {
  try {
    const { countryid, stateid } = req.params;
    const deleted = await Country_State.destroy({
      where: { countryid, stateid },
    });
    if (deleted) {
      res.status(204).json({ message: "Country-State relationship deleted" });
    } else {
      res.status(404).json({ message: "Country-State relationship not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
