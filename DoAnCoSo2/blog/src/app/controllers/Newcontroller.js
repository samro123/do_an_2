class Newcontroller {
    //get /new
    index(req, res) {
        res.render('news');
    }

    //get /new/:s lug
    show(req, res) {
        res.send('New Detail!!');
    }
}

module.exports = new Newcontroller();
