const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Connect to the database
connectDB();

// Init middleware
app.use(cors());
app.use(express.json());

// Define routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
