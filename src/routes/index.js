const newsRouter = require('./news.route');

function route(app) {
    app.use('/news', newsRouter);
    app.get('/', (req, res) => {
        res.send('test');
                    res.statusCode = 400;
    });

    app.post('/login', (req, res) => {});

    app.get('/search', (req, res) => {
        console.log(req.query);
    });
}

module.exports = route;
