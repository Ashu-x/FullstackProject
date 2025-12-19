const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Client name is required'],
            trim: true,
            maxlength: [100, 'Name cannot exceed 100 characters']
        },
        designation: {
            type: String,
            required: [true, 'Designation is required'],
            enum: {
                values: ['CEO', 'Web Developer', 'Designer', 'Manager', 'Other'],
                message: 'Invalid designation'
            }
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            maxlength: [500, 'Description cannot exceed 500 characters']
        },
        image: {
            type: String,
            required: [true, 'Image URL is required']
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Client', clientSchema);