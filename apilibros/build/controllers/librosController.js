"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.createBook = exports.getBookById = exports.getAllBooks = void 0;
const Libros_1 = require("../models/Libros");
const Libros_2 = require("../models/Libros");
async function getAllBooks(req, res) {
    await Libros_1.default.find()
        .then(libros => {
        res.status(200).json({ libros });
    })
        .catch(err => {
        res.status(500).json({ err });
    });
}
exports.getAllBooks = getAllBooks;
async function getBookById(req, res) {
    const id = req.params.id;
    console.log(id);
    await Libros_1.default.findById(id)
        .then(libros => {
        res.status(200).json({ libros });
    })
        .catch(err => {
        res.status(500).json({ err });
    });
}
exports.getBookById = getBookById;
async function createBook(req, res) {
    const id = req.params.id;
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const portada = req.body.portada;
    /*
        if (!req.file){
            res.status(422).json({err: 'Archivo de portada requerido'});
            return;
        }
        const portada = req.file.path;
        */
    if (!titulo) {
        res.status(422).json({ err: 'Titulo not found' });
        return;
    }
    if (!autor) {
        res.status(422).json({ err: 'autor not found' });
        return;
    }
    if (!portada) {
        res.status(422).json({ err: 'Portada not found' });
        return;
    }
    const libro = new Libros_2.default({
        titulo, autor, portada
    });
    await libro.save()
        .then(() => {
        res.status(200).json({ libro });
    })
        .catch(err => {
        res.status(500).json({ err });
    });
}
exports.createBook = createBook;
async function updateBook(req, res) {
    const id = req.params.id;
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    if (!req.file) {
        res.status(422).json({ err: 'Archivo de portada requerido' });
        return;
    }
    const portada = req.file.path;
    await Libros_1.default.findByIdAndUpdate(id, { titulo, autor, portada }, { useFindAndModify: false })
        .then(libroAnterior => {
        if (!libroAnterior) {
            //fs.unlink(path.resolve(portada));
            res.status(404).json({ message: 'no se pudo actualizar' + id });
        }
        else {
            //fs.unlink(path.resolve(libroAnterior.portada));
            res.status(200).json({ libroAnterior });
        }
    })
        .catch(err => {
        //fs.unlink(path.resolve(portada));
        res.status(500).json({ err });
    });
}
exports.updateBook = updateBook;
async function deleteBook(req, res) {
    const id = req.params.id;
    await Libros_1.default.findByIdAndRemove(id)
        .then(libro => {
        if (!libro) {
            res.status(404).json({ message: "no se pudo eliminar el libro: " + id });
        }
        else {
            //fs.unlink(path.resolve(libro.portada));
            res.status(200).json({ libro });
        }
    })
        .catch(err => {
        res.status(500).json({ err });
    });
}
exports.deleteBook = deleteBook;
//# sourceMappingURL=librosController.js.map