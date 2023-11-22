import { Request, Response } from 'express';
import * as path from 'path';
import * as fs from 'fs-extra';

import Libro from '../models/Libros';
import Libros from '../models/Libros';

export async function getAllBooks(req:Request, res:Response)
{
   await Libro.find()
    .then(libros =>{
        res.status(200).json({libros})
    })
    .catch( err =>{
        res.status(500).json({err})
    })
}

export async function getBookById(req:Request, res:Response){
    const id =req.params.id;
    console.log(id);

    await Libro.findById(id)
    .then(libros =>{
        res.status(200).json({libros})
})
    .catch(err =>{
        res.status(500).json({err})
    })    
}

export async function createBook(req:Request,res:Response){
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
    if(!titulo){
        res.status(422).json({err: 'Titulo not found'});
        return;
    }if(!autor){
        res.status(422).json({err: 'autor not found'});
        return;
    }if(!portada){
        res.status(422).json({err: 'Portada not found'});
        return;
    }

    const libro = new Libros({
        titulo,autor,portada
    })

    await libro.save()
        .then(() => {
            res.status(200).json({libro});
        })
        .catch(err => {
            res.status(500).json({err});
        });

}

export async function updateBook(req:Request, res:Response) {
    const id= req.params.id;
    const titulo= req.body.titulo;
    const autor= req.body.autor;
    if(!req.file){
        res.status(422).json({err: 'Archivo de portada requerido'})
        return;
    }
    const portada= req.file.path;

    await Libro.findByIdAndUpdate(id,{titulo,autor,portada},{useFindAndModify: false})
    .then(libroAnterior => {
        if(!libroAnterior){
            //fs.unlink(path.resolve(portada));
            res.status(404).json({message: 'no se pudo actualizar' + id})
        }else{
            //fs.unlink(path.resolve(libroAnterior.portada));
            res.status(200).json({libroAnterior});
        }
    })
    .catch(err => {
        //fs.unlink(path.resolve(portada));
        res.status(500).json({err});
    })
}

export async function deleteBook(req:Request,res:Response){
    const id = req.params.id;

    await Libro.findByIdAndRemove(id)
        .then( libro=> {
            if(!libro){
                res.status(404).json({message: "no se pudo eliminar el libro: "+id})
            }else{
                //fs.unlink(path.resolve(libro.portada));
                res.status(200).json({libro})
            }
        })
        .catch(err=> {
            res.status(500).json({err})
        })
}

