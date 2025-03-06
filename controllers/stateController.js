const State = require("../models/state");

// ✅ Get all states
exports.getAllStates = async (req, res) => {
    try {
        const states = await State.findAll();
        res.status(200).json(states);
    } catch (error) {
        console.error("❌ Error fetching states:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

// ✅ Get state by ID
exports.getStateById = async (req, res) => {
    try {
        const state = await State.findByPk(req.params.id);
        if (!state) return res.status(404).json({ message: "State not found" });

        res.status(200).json(state);
    } catch (error) {
        console.error("❌ Error fetching state:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

// ✅ Create a new state
exports.createState = async (req, res) => {
    try {
        const { stateid, stateName } = req.body;

        if (!stateid || !stateName) {
            return res.status(400).json({ message: "stateid and stateName are required" });
        }

        const newState = await State.create({ stateid, stateName });
        res.status(201).json({ message: "State created successfully", state: newState });
    } catch (error) {
        console.error("❌ Error creating state:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

// ✅ Update a state
exports.updateState = async (req, res) => {
    try {
        const state = await State.findByPk(req.params.id);
        if (!state) return res.status(404).json({ message: "State not found" });

        await state.update(req.body);
        res.status(200).json({ message: "State updated successfully", state });
    } catch (error) {
        console.error("❌ Error updating state:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

// ✅ Delete a state
exports.deleteState = async (req, res) => {
    try {
        const state = await State.findByPk(req.params.id);
        if (!state) return res.status(404).json({ message: "State not found" });

        await state.destroy();
        res.status(200).json({ message: "State deleted successfully" });
    } catch (error) {
        console.error("❌ Error deleting state:", error);
        res.status(500).json({ message: "Server error", error });
    }
};