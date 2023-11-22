"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LibrosSchema = new mongoose_1.Schema({
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
    portada: {
        type: String,
        default: '',
        required: false
    }
});
exports.default = (0, mongoose_1.model)('Libros', LibrosSchema);
//# sourceMappingURL=Libros.js.map