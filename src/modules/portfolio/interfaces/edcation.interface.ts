import { Document } from 'mongoose';

export interface Education extends Document {
    name: string,
    class: string,
    gpa: string | null,
    time: string,
}