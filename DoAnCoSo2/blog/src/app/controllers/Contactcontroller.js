class Contactcontroller {
    //get /new
    index(req, res) {
        res.render('contact');
    }

}

module.exports = new Contactcontroller();
