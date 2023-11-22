import * as multer from "multer";
import * as uuid from "uuid";
import * as path from "path";

const storage = multer.diskStorage({
    destination: 'uploads',
    filename:(req, file, cb)=>{
        cb(null, uuid.v4() + path.extname(file.originalname));
    }
});

export default multer({storage});