class NewController {
    index(req, res) {
        res.send('on News');
    }

    show(req, res) {
        res.send('on SLug');
    }
}

module.exports = new NewController();
