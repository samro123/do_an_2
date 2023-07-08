class Checkoutcontroller {
    //get /new
    index(req, res) {
        res.render('checkout');
    }

}

module.exports = new Checkoutcontroller();
