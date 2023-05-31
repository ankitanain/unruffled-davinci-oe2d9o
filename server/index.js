const mysql = require('mysql2');
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors()); // Enable CORS for all routes

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Papamummy@45',
  database: 'oohr_ecom',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads/')); // Use the absolute path to the uploads folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    const filename = file.fieldname + '-' + uniqueSuffix + ext;
    cb(null, filename); // Use the generated filename for the stored image
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  console.log(req.body);

  const imagePath = req.file.filename; // Use the filename property of the req.file object

  // Save the image details to the database
  const query =
    'INSERT INTO new_books_details (name, author, price, path, class) VALUES (?, ?, ?, ?, ?)';
  connection.query(
    query,
    [req.body.name, req.body.author, req.body.price, imagePath, req.body.class],
    (err, result) => {
      if (err) throw err;

      console.log('Image details saved to the database!');
      res.send('Image uploaded successfully!');
    }
  );
});

app.listen(8000, () => {
  console.log('Server started on port 8000');
});
