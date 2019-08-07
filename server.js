const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load env
dotenv.config({ path: './config.env' });

const app = express();

// Dev logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Profile routes
app.use('/api/v1/profile', require('./routes/profile'));

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
