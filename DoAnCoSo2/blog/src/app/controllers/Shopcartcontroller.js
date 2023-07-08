const Course = require('../Model/course');

const {mutipleMongooseToObject} = require('../../util/mongoose');
class Shopcartcontroller {
    //get /new
    index(req, res, next) {
        // res.render('');
        Course.find({})
        .then(course => {
            res.render('shopcart',{ 
                course: mutipleMongooseToObject(course)
            });
        })
        .catch(next);
    }

}


module.exports = new Shopcartcontroller();