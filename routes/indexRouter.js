const { Router } = require('express');
const indexRouter = Router();
const { v4: uuidv4 } = require('uuid');

const links = [
    { href: '/', text: 'Home' },
    { href: 'new', text: 'Add quote' },
];

const quotes = [
    {
        id: uuidv4(),
        text: 'Don\'t look at me. I didn\'t put that clumsy glamour on him. Sigils are beneath me.',
        name: 'Agatha Harkness',
        added: new Date()
    },
    {
        id: uuidv4(),
        text: 'What is grief, if not love persevering?',
        name: 'Vision',
        added: new Date()
    }
];

indexRouter.get('/', (req, res) => {
    res.render('index', { title: 'Home', links, quotes });
});

indexRouter.get('/new', (req, res) => {
    res.render('form', { title: 'Add quote', links });
});

indexRouter.post('/new', (req, res) => {
    const { name, text } = req.body;

    quotes.push({
        id: uuidv4(),
        text: text,
        name: name,
        added: new Date()
    });

    res.redirect('/');
});

indexRouter.get('/quotes/:id', (req, res) => {
    const quoteId = req.params.id;
    const quote = quotes.find(q => q.id === quoteId);

    if(quote) {
        res.render('details', { title: 'Quote details', links, quote });
    } else {
        res.status(404).send('Quote not found');
    }
});

module.exports = indexRouter;