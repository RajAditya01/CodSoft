import mongoose from "mongoose";

const project = new mongoose.Schema({
    title: {
        type: String,
        unique: true // `title` must be unique
    },
    description: String,
    task: [
        {
            id: Number,
            title: String,
            description: String,
            order: Number,
            stage: String,
            index: Number,
            attachment: [
                { type: String, url: String }
            ],
            deadline: Date, // Adding deadline field
            created_at: { type: Date, default: Date.now },
            updated_at: { type: Date, default: Date.now },
        }
    ]
}, { timestamps: true });

export default mongoose.model('Project', project);
