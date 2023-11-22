"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const librosController_1 = require("../controllers/librosController");
exports.default = (app) => {
    const apiRoute = express.Router();
    const librosRouters = express.Router();
    apiRoute.use('/libros', librosRouters);
    librosRouters.get('/', librosController_1.getAllBooks);
    librosRouters.get('/:id', librosController_1.getBookById);
    librosRouters.post('/', librosController_1.createBook);
    librosRouters.put('/:id', librosController_1.updateBook);
    librosRouters.delete('/:id', librosController_1.deleteBook);
    app.use('/api', apiRoute);
};
//# sourceMappingURL=librosRouter.js.map