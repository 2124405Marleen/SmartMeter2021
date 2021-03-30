const fs = require('fs').promises;

const express = require('express');
const bodyParser = require('body-parser');

const Energie = require('./models/energie.model');

const cors = require('cors');
const app = express();

//Internet will sometimes block stuff without this
app.use(cors());

const port = 3300;

const energieRouter = require('./routes/energie.routes');
const tempRouter = require('./routes/temperature.routes');

app.use(energieRouter);
app.use(tempRouter);
app.listen(
  port,
  () => console.log(`app listening at http://localhost:${port}`)
  );

