import express from 'express';
import mysql from 'mysql'
import cors from 'cors'

app.use(cors());
const app = express();

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"Gauri@1029",
    database:"employeesystem",
})

app.listen(3001, () =>
  console.log('Example app listening on port 3001!'),
);