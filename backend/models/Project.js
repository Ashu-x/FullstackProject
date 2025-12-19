const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Project name is required'],
            trim: true,
            maxlength: [100, 'Name cannot exceed 100 characters']
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

module.exports = mongoose.model('Project', projectSchema);