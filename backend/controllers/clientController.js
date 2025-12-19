const Client = require('../models/Client');

exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: clients.length,
            data: clients
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.createClient = async (req, res) => {
    try {
        const { name, designation, description, image } = req.body;

        if (!name || !designation || !description || !image) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields'
            });
        }

        const client = await Client.create({
            name,
            designation,
            description,
            image
        });

        res.status(201).json({
            success: true,
            message: 'Client created successfully',
            data: client
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
