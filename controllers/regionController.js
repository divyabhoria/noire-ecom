const Region = require("../models/region");

// ✅ Create a new region
exports.create = async (req, res) => {
    try {
        const { RegionName } = req.body;

        if (!RegionName) {
            return res.status(400).json({ message: "RegionName is required" });
        }

        const region = await Region.create({ RegionName });
        res.status(201).json(region);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Get all regions
exports.findAll = async (req, res) => {
    try {
        const regions = await Region.findAll();
        res.status(200).json(regions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Get a single region by ID
exports.findOne = async (req, res) => {
    try {
        const region = await Region.findOne({ where: { regionid: req.params.id } });

        if (region) {
            res.status(200).json(region);
        } else {
            res.status(404).json({ message: "Region not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Update a region by ID
exports.update = async (req, res) => {
    try {
        const { RegionName } = req.body;
        const [updated] = await Region.update({ RegionName }, {
            where: { regionid: req.params.id }
        });

        if (updated) {
            const updatedRegion = await Region.findOne({ where: { regionid: req.params.id } });
            res.status(200).json(updatedRegion);
        } else {
            res.status(404).json({ message: "Region not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Delete a region by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Region.destroy({
            where: { regionid: req.params.id }
        });

        if (deleted) {
            res.status(204).json({ message: "Region deleted successfully" });
        } else {
            res.status(404).json({ message: "Region not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
