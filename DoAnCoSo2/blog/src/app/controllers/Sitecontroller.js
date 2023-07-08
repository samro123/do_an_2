const Course = require('../Model/course');

const {mutipleMongooseToObject} = require('../../util/mongoose');

class Sitecontroller {
    //get /search
    index(req, res, next) {

        Course.find({})
        .then(course => {
            res.render('home',{ 
                course: mutipleMongooseToObject(course)
            });
        })
        .catch(next);
    }

    //get /new/:s lug
    search(req, res) {
        res.render('search');
    }
 
}

module.exports = new Sitecontroller();
