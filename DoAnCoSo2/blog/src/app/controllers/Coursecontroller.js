const Course = require('../Model/course');

const {mongooseToObject} = require('../../util/mongoose');
const course = require('../Model/course');
const { request } = require('express');




class Coursecontroller {
   //[GET] /course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug})
        .then(course =>{
            res.render('courses/show', { course: mongooseToObject(course) });
        })
       
    }
    //[GET] /course/create
    create(req, res, next) {
       res.render('courses/create');
       
    }
    //[GET] /courses/admin
   //  admin(req, res, next) {
   //    // res.render('courses/admin', );
   //    Course.find({})
   //      .then(course => res.render('courses/admin' ,{
   //       course:  mongooseToObject(course)
   //      }) )
   //      .catch(next); 
   // }
     //[GET] /courses/invoice
     invoice(req, res, next) {
      res.render('courses/invoice');
      
   }
    //[GET] /courses/chat
    chat(req, res, next) {
      res.render('courses/chat');
      
   }
     //[POST] /course/store       // luu du lieu vao 
     store(req, res, next) {
       console.log(req.file);
        const course = new Course(
         {  name: req.body.name ,
            description: req.body.description ,
            city: req.body.city ,
            type: req.body.type ,
            producer: req.body.producer ,
            money: req.body.money ,
            quantity: req.body.quantity ,
            images: req.file.filename,
         }
           );
        course.save ()
    
        .then( () => res.redirect('/me/stored/courses'))
        .catch( error => {
         console.log('Error');
        } );
  
      }
      

      //[GET] /course/:id/edit
      edit(req, res, next) {
          Course.findById(req.params.id)
          .then(course =>res.render('courses/edit' ,{
            course: mongooseToObject(course)
          }) )
          .catch(next);        
        
     }
     

     //[PUT] /course/:id
     update(req, res, next) {
        Course.updateOne({ _id: req.params.id}, req.body )
        .then(() => res.redirect('/me/stored/courses'))
        .catch(next);
        
     }

     //[DELETE] /course/:id xoa mem
     destroy(req, res, next){
         Course.delete({ _id: req.params.id})
         .then(() =>res.redirect('back'))
         .catch(next);
     }

     //[DELETE] /course/:id/force xoa luon
     forceDestroy(req , res, next){
        Course.deleteOne({ _id: req.params.id})
        .then(() =>res.redirect('back'))
        .catch(next);
     }
     
       //[PATCH] /course/:id/restore
     restore(req, res, next){
        Course.restore({ _id: req.params.id})
        .then(() =>res.redirect('back'))
        .catch(next);
     } 
     
     //[POST] /courses/handle-form-actions
     handleFormAction(req, res, next){
      switch(req.body.action){
         case 'delete':
            Course.delete({ _id: { $in:  req.body.coureIds }})
           .then(() =>res.redirect('back'))
           .catch(next);

           break;
         default:
            res.json({ message: 'Action is invalid!'});
      }
     }
    //[POST] /courses/handled-form-actions
    handedFormAction(req, res, next){
      switch(req.body.action){
         case 'restore':
            Course.restore({ _id: { $in:  req.body.coureIds }})
            .then(() =>res.redirect('back'))
            .catch(next);
           break;
         case 'delelteDestroy':
            Course.deleteOne({ _id: { $in:  req.body.coureIds }})
            .then(() =>res.redirect('back'))
            .catch(next);
           break;
         default:
            res.json({ message: 'Action is invalid!'});
      }
     }
   

}

module.exports = new Coursecontroller();
