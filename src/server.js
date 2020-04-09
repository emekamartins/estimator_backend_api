const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const estimatorController = require('./controller/estimator');


app.use(cors({
  origin: '*',
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.options('*', cors());


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization header');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const normalizePort = (val) => {
  const port = Number.parseInt(val, 10);

  if (typeof (port) !== 'number') { return val; }
  if (port >= 0) { return port; }
  return false;
};

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);


app.post('/api/v1/on-covid-19', estimatorController.estimator);
app.post('/api/v1/on-covid-19/json', estimatorController.estimator);
app.post('/api/v1/on-covid-19/xml', estimatorController.estimatorXml);


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on ${port}`);
});
