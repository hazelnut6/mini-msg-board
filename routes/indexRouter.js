const { Router } = require('express');
const indexRouter = Router();

const links = [
    { href: '/', text: 'Home' },
    { href: 'new', text: 'Add quote' },
];

const quotes = [
    {
        text: 'Don\'t look at me. I didn\'t put that clumsy glamour on him. Sigils are beneath me.',
        name: 'Agatha Harkness',
        added: new Date()
    },
    {
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
        text: text,
        name: name,
        added: new Date()
    });

    res.redirect('/');
});

module.exports = indexRouter;