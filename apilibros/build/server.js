"use strict";
//importamos las librerias del proyecto
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const helmet_1 = require("helmet");
const cors = require("cors");
const https = require("https");
const path = require("path");
const fs = require("fs");
//importamos las rutas del servidor
const librosRouter_1 = require("./routes/librosRouter");
//importamos la configuracion que esta en el archivo main
const main_1 = require("./config/main");
//inizializamos express
const app = express();
//inizializamos mongoose
//mongoose.connect().then().catch()
mongoose.connect(main_1.default.db)
    .then(() => {
    console.log('base de datos conectada');
})
    .catch(err => {
    console.log(err);
});
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(logger('dev'));
app.use((0, helmet_1.default)());
app.use(cors());
//configuramos las rutas
(0, librosRouter_1.default)(app);
/// configuramos la carpeta uploads como publica
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
//configura la ruta por defecto
app.use((req, res) => {
    res.status(404).send("No se encontro la ruta");
});
//inicializamos el servidor
//
let server;
server = app.listen(main_1.default.port, () => {
    console.log('servidor escuchando en el puerto ' + main_1.default.port);
});
https.createServer({
    cert: fs.readFileSync(__dirname + "/../cert/server.cert"),
    key: fs.readFileSync(__dirname + "/../cert/server.key")
}, app).listen(main_1.default.porthttps, () => {
    console.log('servidor escucha en el puerto ' + main_1.default.porthttps);
});
//# sourceMappingURL=server.js.map