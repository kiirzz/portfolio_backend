import { Schema } from "mongoose";

export const ProjectSchema = new Schema({
    name: { type: String, required: true },
    time: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    size: { type: Number, required: true },
    functions: { type: [String], default: null},
    technology: {
        frontend: { type: [String], default: null },
        backend: { type: [String], default: null },  
        database: { type: [String], default: null }, 
        other: { type: [String], default: null }, 
    },
    link: {
        name: { type: String, required: true },
        data: { type: String, required: true },
    },
})