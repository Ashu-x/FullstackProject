const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Full name is required'],
            trim: true,
            maxlength: [100, 'Name cannot exceed 100 characters']
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
        },
        mobile: {
            type: String,
            required: [true, 'Mobile number is required'],
            match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit mobile number']
        },
        city: {
            type: String,
            required: [true, 'City is required'],
            trim: true,
            maxlength: [100, 'City cannot exceed 100 characters']
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);