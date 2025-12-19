const Contact = require('../models/Contact');

exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.createContact = async (req, res) => {
    try {
        const { name, email, mobile, city } = req.body;

        if (!name || !email || !mobile || !city) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields'
            });
        }

        const contact = await Contact.create({
            name,
            email,
            mobile,
            city
        });

        res.status(201).json({
            success: true,
            message: 'Contact submitted successfully',
            data: contact
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
