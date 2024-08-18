import { Schema } from "mongoose";

export const ProjectSchema = new Schema({
    name: { type: String, required: true },
    time: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    size: { type: Number, required: true },
    functions: { type: [String], required: true},
    technology: {
        frontend: { type: [String], required: true },
        backend: { type: [String], required: true },  
        database: { type: [String], required: true }, 
        other: { type: [String], required: true }, 
    },
    link: {
        name: { type: String, required: true },
        data: { type: String, required: true },
    },
})