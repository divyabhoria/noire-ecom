const Region_Country = require("../models/region_country");

// ✅ Create a new region-country entry
exports.create = async (req, res) => {
    try {
        const { reggionid, countryid } = req.body;

        if (!reggionid || !countryid) {
            return res.status(400).json({ message: "reggionid and countryid are required" });
        }

        const regionCountry = await Region_Country.create({ reggionid, countryid });
        res.status(201).json(regionCountry);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Get all region-country entries
exports.findAll = async (req, res) => {
    try {
        const regionCountries = await Region_Country.findAll();
        res.status(200).json(regionCountries);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Get a single region-country entry by ID
exports.findOne = async (req, res) => {
    try {
        const regionCountry = await Region_Country.findOne({ where: { id: req.params.id } });

        if (regionCountry) {
            res.status(200).json(regionCountry);
        } else {
            res.status(404).json({ message: "Region-Country entry not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Update a region-country entry by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await Region_Country.update(req.body, {
            where: { id: req.params.id }
        });

        if (updated) {
            const updatedRegionCountry = await Region_Country.findOne({ where: { id: req.params.id } });
            res.status(200).json(updatedRegionCountry);
        } else {
            res.status(404).json({ message: "Region-Country entry not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Delete a region-country entry by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Region_Country.destroy({ where: { id: req.params.id } });

        if (deleted) {
            res.status(204).json({ message: "Region-Country entry deleted successfully" });
        } else {
            res.status(404).json({ message: "Region-Country entry not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
