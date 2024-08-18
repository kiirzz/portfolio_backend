import { Document } from 'mongoose';

export interface Project extends Document {
    name: string,
    time: string,
    image: string,
    description: string,
    size: number,
    functions: string[],
    technology: {
        frontend: string[],
        backend: string[],  
        database: string[], 
        other: string[], 
    },
    link: {
        name: string,
        data: string,
    },
}   