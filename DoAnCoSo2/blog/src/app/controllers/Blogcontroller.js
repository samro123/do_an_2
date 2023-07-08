class Blogcontroller {
    //get /new
    index(req, res) {
        res.render('blog');
    }

}

module.exports = new Blogcontroller();