const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes'); // Import routes
const connectDB = require('./Database/connect');

require('dotenv').config();
connectDB(process.env.MONGODB_URL);

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes); // Mount routes at the root path

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
