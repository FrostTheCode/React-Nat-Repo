import * as express from "express";
import multer from '../libs/multer';

import {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook

} from '../controllers/librosController'

export default(app) => {

    const apiRoute = express.Router();

    const librosRouters=express.Router();

    apiRoute.use('/libros',librosRouters);

    librosRouters.get('/', getAllBooks);

    librosRouters.get('/:id', getBookById);

    librosRouters.post('/' ,createBook);

    librosRouters.put('/:id' ,updateBook);

    librosRouters.delete('/:id', deleteBook);

    app.use('/api', apiRoute);
};