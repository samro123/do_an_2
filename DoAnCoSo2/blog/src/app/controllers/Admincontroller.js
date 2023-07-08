const Course = require('../Model/course');

const {mutipleMongooseToObject} = require('../../util/mongoose');
class Admincontroller {
    //get /new
    index(req, res, next) {
        // res.render('');
        Course.find({})
        .then(course => {
            res.render('courses/admin',{ 
                course: mutipleMongooseToObject(course)
            });
        })
        .catch(next);
    }

}

module.exports = new Admincontroller();