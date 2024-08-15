import { Document } from 'mongoose';

export interface Certification extends Document {
    name: string,
    time: string,
    field: string,
    prize: string,
}