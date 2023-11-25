const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
const port = 3001;

app.use(cors());

const storage = multer.diskStorage ({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const invalidMimetypes = ['application/pdf', 'text/plain'];
    const fileValid = !invalidMimetypes.includes(file.mimetype);
    if (!fileValid) {
      req.fileValidationError = 'File type not supported';
    }
    cb(null, fileValid);
  }
}).single('file')

const parseUploadStatus = (req) => {
  const file = req.file;
  if (file) {
    return { status: 200, message: 'File uploaded successfully' };
  }

  if (req.fileValidationError) {
    return { status: 422, message: req.fileValidationError };
  }

  return { status: 400, message: 'No file attached' };
};

app.post('/upload', (req, res) => {
  upload(req, res, function(err) {
    const file = req.file;

    const { status, message } = parseUploadStatus(req)
    res.status(status).json({ message });
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
