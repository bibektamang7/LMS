// utils/multer.ts
import multer from 'multer';
import path from 'path';

// Configure multer to store the file temporarily in the 'uploads/' directory
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 10000000 }, // limit file size to 10MB
});
