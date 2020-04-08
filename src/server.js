const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


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
  

  app.post('/api/v1/on-covid-19', (req, res) => {
    return res.status(200)
    .json({
        status: 'successful',
        data: {
            message: 'OK'
        }
    })
  })



  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  })