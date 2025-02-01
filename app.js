// server.js
const express = require('express');
const app = express();
const index = require('./index.js');
const path = require('path');
const dotenv = require('dotenv');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

dotenv.config();


index.index(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});