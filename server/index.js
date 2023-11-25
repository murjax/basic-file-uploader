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
    cb(null, file.fieldname + '-' + Date.now())
  }
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  if (!file) {
    const error = new Error('Please attach a file');
    error.statusCode = 400;
    return next(error);
  }
  res.send('File uploaded successfully');
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
