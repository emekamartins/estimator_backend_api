/* eslint-disable max-len */
const express = require('express');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
const morgan = require('./middleware/morgan');

// const fs = require('fs');
// const morgan = require('morgan');
// const path = require('path');
const estimatorRoutes = require('./routes/estimator');

app.use(cors({
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.options('*', cors());


// create a write stream (in append mode)
// const accessLogStream = fs.createWriteStream(path.join(__dirname, '../access.log'), { flags: 'a' });

// setup the logger
app.use(morgan);
// app.use(morgan(':method :url :status :response-time ms', { stream: accessLogStream }));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(bodyParser.json());

app.use('/api/v1/on-covid-19', estimatorRoutes);


module.exports = app;
