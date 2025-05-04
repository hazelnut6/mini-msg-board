const express = require('express');
const app = express();
require('dotenv').config(); 
const indexRouter = require('./routes/indexRouter');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


//ROUTERS
app.use('/', indexRouter);

//PORT
const PORT = process.env.PORT;
app.listen(PORT, () => { console.log('Running...') });