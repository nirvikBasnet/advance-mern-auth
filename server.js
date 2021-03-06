require('dotenv').config({ path: "./config.env" });
const express = require('express');
const connectDB = require('./config/db');

// Connect to Mongo

connectDB();

const app = express();

app.use(express.json());


app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT | 8000;

const server = app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error : ${err}`);
    server.close(() => process.exit(1));
})

