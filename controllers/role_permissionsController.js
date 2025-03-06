const Role_Permissions = require("../models/role_permissions");

// ✅ Create a new role-permission entry
exports.create = async (req, res) => {
    try {
        const { roleid, permissionsid } = req.body;

        if (!roleid || !permissionsid) {
            return res.status(400).json({ message: "Both roleid and permissionsid are required" });
        }

        const rolePermission = await Role_Permissions.create({ roleid, permissionsid });
        res.status(201).json(rolePermission);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Get all role-permission entries
exports.findAll = async (req, res) => {
    try {
        const rolePermissions = await Role_Permissions.findAll();
        res.status(200).json(rolePermissions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Get a single role-permission entry by ID
exports.findOne = async (req, res) => {
    try {
        const rolePermission = await Role_Permissions.findOne({ where: { id: req.params.id } });

        if (rolePermission) {
            res.status(200).json(rolePermission);
        } else {
            res.status(404).json({ message: "Role-Permission entry not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Update a role-permission entry by ID
exports.update = async (req, res) => {
    try {
        const { roleid, permissionsid } = req.body;
        const [updated] = await Role_Permissions.update({ roleid, permissionsid }, {
            where: { id: req.params.id }
        });

        if (updated) {
            const updatedEntry = await Role_Permissions.findOne({ where: { id: req.params.id } });
            res.status(200).json(updatedEntry);
        } else {
            res.status(404).json({ message: "Role-Permission entry not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Delete a role-permission entry by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Role_Permissions.destroy({
            where: { id: req.params.id }
        });

        if (deleted) {
            res.status(204).json({ message: "Role-Permission entry deleted successfully" });
        } else {
            res.status(404).json({ message: "Role-Permission entry not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
