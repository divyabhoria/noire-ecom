const Customer = require('../models/customer');

// ✅ Create a new customer
exports.create = async (req, res) => {
    try {
        const { Cust_FName, Cust_LName, Address, dob, stateid, Countryid, regionid, userid, emailid, phoneno } = req.body;

        if (!Cust_FName || !Cust_LName || !Address || !dob) {
            return res.status(400).json({ message: "First name, last name, address, and DOB are required" });
        }

        const customer = await Customer.create({ 
            Cust_FName, Cust_LName, Address, dob, stateid, Countryid, regionid, userid, emailid, phoneno 
        });

        res.status(201).json(customer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Get all customers
exports.findAll = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        res.status(200).json(customers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Get a customer by ID
exports.findOne = async (req, res) => {
    try {
        const customer = await Customer.findOne({ where: { customerid: req.params.id } });
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Update a customer by ID
exports.update = async (req, res) => {
    try {
        const [updated] = await Customer.update(req.body, { where: { customerid: req.params.id } });

        if (updated) {
            const updatedCustomer = await Customer.findOne({ where: { customerid: req.params.id } });
            res.status(200).json(updatedCustomer);
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// ✅ Delete a customer by ID
exports.delete = async (req, res) => {
    try {
        const deleted = await Customer.destroy({ where: { customerid: req.params.id } });

        if (deleted) {
            res.status(204).json({ message: 'Customer deleted' });
        } else {
            res.status(404).json({ message: 'Customer not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
