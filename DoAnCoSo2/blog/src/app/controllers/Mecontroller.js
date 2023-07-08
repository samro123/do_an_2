const Course = require('../Model/course');

const {mutipleMongooseToObject} = require('../../util/mongoose');

class Mecontroller {

  //[GET] me /stored/courses'
    storedCourses(req, res, next) {
       
      let courseQuery = Course.find({});
      if(req.query.hasOwnProperty('_sort')){

        const isValidtype = ['asc', 'desc'].includes(req.query.type);
        courseQuery = courseQuery.sort({
            [req.query.column]: isValidtype ? req.query.type: 'desc',
        });
      }

        Promise.all( [courseQuery ,Course.countDocumentsDeleted()])
        .then(([courses, deletedCount]) => 
        res.render('me/stored-courses' ,{
            deletedCount,
            courses: mutipleMongooseToObject(courses)

        })
        )
        .catch(next);

        // Course.countDocumentsDeleted()
        // .then((deletedCount) =>{

        // })
        // .catch(() =>{});
 

        // Course.find({})
        // .then(courses => res.render('me/stored-courses' ,{
        //     courses: mutipleMongooseToObject(courses)
        // }) )
        // .catch(next);
    }
    
     //[GET] me /trash/courses'
    trashCourses(req, res ,next){
        Course.findDeleted({})
        .then(courses => res.render('me/trash-courses' ,{
            courses: mutipleMongooseToObject(courses)
        }) )
        .catch(next);
    }
}

module.exports = new Mecontroller();
