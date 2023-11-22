import {Document,Schema,model} from "mongoose";

export interface Ilibro extends Document{
    titulo: string,
    autor: string,
    portada: string
}

const LibrosSchema = new Schema({
    titulo: {
        type: String,
        default: '',
        required: true
    },
    autor: {
        type: String,
        default: '',
        required: true
    },
    portada:{
        type: String,
        default: '',
        required: false
    }
});
export default model<Ilibro>('Libros', LibrosSchema);