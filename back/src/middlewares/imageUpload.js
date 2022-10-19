import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./userImages/");
    },
    filename: (req, file, cb) => {
        const { nickname } = req.nickname;
        const unicodeName = Buffer.from(nickname).toString("base64");
        cb(null, unicodeName + path.extname(file.originalname));
    },
});

const fileFilter = (req, file, cb) => {
    let exe = path.extname(file.originalname);
    exe = exe.toLowerCase();
    if (exe !== ".png" && exe !== ".jpg" && exe !== ".jpeg") {
        return cb(new Error("PNG, JPG, JPEG 파일만 업로드 가능합니다."));
    }
    cb(null, true);
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 1024,
    },
});

export { upload };
