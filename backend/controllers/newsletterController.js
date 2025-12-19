const Newsletter = require('../models/Newsletter');

exports.getAllSubscriptions = async (req, res) => {
    try {
        const subscriptions = await Newsletter.find().sort({ createdAt: -1 });
        res.status(200).json({
            success: true,
            count: subscriptions.length,
            data: subscriptions
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};