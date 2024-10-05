const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root124',
  database: 'dataof_forms'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

app.post('/submit', (req, res) => {
  const { username, email, occupation, gender, languages, dateOfBirth, phoneNumber, appointmentTime } = req.body;

  const query = `INSERT INTO users (username, email, occupation, gender, languages, date_of_birth, phone_number, appointment_time) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(query, [username, email, occupation, gender, languages.join(','), dateOfBirth, phoneNumber, appointmentTime], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server issue');
    } else {
      res.status(200).send('Form submitted successfully!');
    }
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
