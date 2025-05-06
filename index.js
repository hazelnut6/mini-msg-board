const express = require('express');
const app = express();
require('dotenv').config(); 
const indexRouter = require('./routes/indexRouter');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


//ROUTERS
app.use('/', indexRouter);

//ERROR
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode || 500).send(err.message);
});
    
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});


//PORT
const PORT = process.env.PORT;
app.listen(PORT, () => { console.log('Running...') });