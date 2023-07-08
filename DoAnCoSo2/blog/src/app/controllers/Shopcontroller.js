const Course = require('../Model/course');

const {mutipleMongooseToObject} = require('../../util/mongoose');
class Shopcontroller {
    //get /new
    index(req, res, next) {
        // res.render('');
        Course.find({})
        .then(course => {
            res.render('shop',{ 
                course: mutipleMongooseToObject(course)
            });
        })
        .catch(next);
    }

}

module.exports = new Shopcontroller();