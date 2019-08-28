const mongoose = require('mongoose');
require('dotenv').config()
// mongoose.set('debug', true);
mongoose.connect(process.env.DB, {
  keepAlive: true,
  useNewUrlParser: true
});

module.exports.Stock = require('./stock');