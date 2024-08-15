import { Schema } from "mongoose";

export const SkillSchema = new Schema({
    name: { type: String, required: true },
    list: { type: [String], required: true },
})