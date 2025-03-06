// const Permissions = require("../models/permissions");

// // ✅ Create a new permission
// exports.create = async (req, res) => {
//     try {
//         const { PermissionsName } = req.body;

//         if (!PermissionsName) {
//             return res.status(400).json({ message: "PermissionsName is required" });
//         }

//         const permission = await Permissions.create({ PermissionsName });

//         res.status(201).json(permission);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// // ✅ Get all permissions
// exports.findAll = async (req, res) => {
//     try {
//         const permissions = await Permissions.findAll();
//         res.status(200).json(permissions);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// // ✅ Get a single permission by ID
// exports.findOne = async (req, res) => {
//     try {
//         const permission = await Permissions.findOne({ where: { Permissionsid: req.params.id } });

//         if (permission) {
//             res.status(200).json(permission);
//         } else {
//             res.status(404).json({ message: "Permission not found" });
//         }
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// // ✅ Update a permission by ID
// exports.update = async (req, res) => {
//     try {
//         const [updated] = await Permissions.update(req.body, {
//             where: { Permissionsid: req.params.id }
//         });

//         if (updated) {
//             const updatedPermission = await Permissions.findOne({ where: { Permissionsid: req.params.id } });
//             res.status(200).json(updatedPermission);
//         } else {
//             res.status(404).json({ message: "Permission not found" });
//         }
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };

// // ✅ Delete a permission by ID
// exports.delete = async (req, res) => {
//     try {
//         const deleted = await Permissions.destroy({
//             where: { Permissionsid: req.params.id }
//         });

//         if (deleted) {
//             res.status(204).json({ message: "Permission deleted successfully" });
//         } else {
//             res.status(404).json({ message: "Permission not found" });
//         }
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// };


const Permissions = require("../models/permissions");

// ✅ Create a new permission
exports.create = async (req, res) => {
    try {
        const { PermissionsName } = req.body;

        if (!PermissionsName) {
            return res.status(400).json({ message: "PermissionsName is required" });
        }

        const permission = await Permissions.create({ PermissionsName });
        res.status(201).json(permission);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Get all permissions
exports.findAll = async (req, res) => {
    try {
        const permissions = await Permissions.findAll();
        res.status(200).json(permissions);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Get a single permission by ID
exports.findOne = async (req, res) => {
    try {
        const permission = await Permissions.findOne({ where: { Permissionsid: req.params.id } });

        if (permission) {
            res.status(200).json(permission);
        } else {
            res.status(404).json({ message: "Permission not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Update a permission by ID
exports.update = async (req, res) => {
    try {
        const { PermissionsName } = req.body;

        const [updated] = await Permissions.update({ PermissionsName }, {
            where: { Permissionsid: req.params.id }
        });

        if (updated) {
            const updatedPermission = await Permissions.findOne({ where: { Permissionsid: req.params.id } });
            res.status(200).json(updatedPermission);
        } else {
            res.status(404).json({ message: "Permission not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Delete a permission by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Permissions.destroy({
            where: { Permissionsid: req.params.id }
        });

        if (deleted) {
            res.status(204).json({ message: "Permission deleted successfully" });
        } else {
            res.status(404).json({ message: "Permission not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
