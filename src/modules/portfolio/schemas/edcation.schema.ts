import { Schema } from "mongoose";

export const EducationSchema = new Schema({
    name: { type: String, required: true },
    class: { type: String, required: true },
    gpa: { type: String, default: null },
    time: { type: String, required: true },
})