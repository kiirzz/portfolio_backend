import { Schema } from "mongoose";

export const CertificationSchema = new Schema({
    name: { type: String, required: true },
    time: { type: String, required: true },
    field: { type: String, required: true },
    prize: { type: String, required: true },
})