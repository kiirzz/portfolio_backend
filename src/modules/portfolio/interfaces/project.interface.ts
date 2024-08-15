import { Document } from 'mongoose';

export interface Project extends Document {
    name: string,
    time: string,
    image: string,
    description: string,
    size: number,
    functions: string[] | null,
    technology: {
        frontend: string[] | null,
        backend: string[] | null,  
        database: string[] | null, 
        other: string[] | null, 
    },
    link: {
        name: string,
        data: string,
    },
}   