const cors = require('cors')
const {json} = require('express');
const express = require('express');
const app = express();
const routes = require('../src/routes');

app.use(express.json());
app.use(cors())
app.use('/', routes);

app.listen(process.env.PORT || 3001)