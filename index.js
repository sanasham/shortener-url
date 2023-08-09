const express = require('express');
const connectDB = require('./connect.js');
const urlRoutes = require('./routes/urlRoute.js');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || '';
connectDB();
const middleware = (req, res, next) => {
  console.log(req.params.shortid);
  next();
};

app.use('/api/contacts', require('./routes/contactRoutes'));
app.use('/url', urlRoutes);
app.use('/:shortId', urlRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
