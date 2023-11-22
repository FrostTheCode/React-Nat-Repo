//importamos las librerias del proyecto


import * as express from 'express';
import * as mongoose from 'mongoose';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import helmet from 'helmet';
import * as cors from 'cors';
import * as https from 'https';
import * as path from 'path';
import * as fs from 'fs';

//importamos las rutas del servidor
import router from './routes/librosRouter';
 
//importamos la configuracion que esta en el archivo main
import config from './config/main';

//inizializamos express
const app = express();

//inizializamos mongoose
//mongoose.connect().then().catch()
mongoose.connect(config.db)
    .then( () => {
        console.log('base de datos conectada');
    })
    .catch( err => {
        console.log(err);
    });

    //middleware
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cookieParser());
    app.use(logger('dev'));
    app.use(helmet());
    app.use(cors());

    //configuramos las rutas
    router(app);
    /// configuramos la carpeta uploads como publica
    app.use('/uploads',express.static(path.join(__dirname, '../uploads')))
    //configura la ruta por defecto
    app.use((req, res) => {
        res.status(404).send("No se encontro la ruta")
    })


    //inicializamos el servidor
    //
   let server;
    server = app.listen(config.port, ()=>{
        console.log('servidor escuchando en el puerto '+config.port);
    });

    https.createServer({
        cert: fs.readFileSync(__dirname+"/../cert/server.cert"),
        key: fs.readFileSync(__dirname+"/../cert/server.key")
    },app).listen(config.porthttps, () => {
        console.log('servidor escucha en el puerto '+config.porthttps);
    });


