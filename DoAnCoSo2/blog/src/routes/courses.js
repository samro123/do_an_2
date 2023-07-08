const express = require('express');
const router = express.Router();
const coursecontroller = require('../app/controllers/Coursecontroller');
const multer = require('multer');
const path = require('path')


//define storage for the images 
const storage = multer.diskStorage({
    //destion for files
   destination:function(req , file, callback){
       if(file.mimetype === "image/jpg"||
         file.mimetype === "image/png" ||
         file.mimetype === "image/jpeg"){
       callback(null ,'./uploads/');
         }
         else{
           callback(new Error('not image'), false);
         }

       
   },
    //add back the extenstion
    filename:function (req, file, callback){
       callback(null , Date.now() +  path.extname(file.originalname));
    },
 });
 //const upload = multer({storage: storage});
//  //upload parameters for multer
 const upload = multer({
    storage:storage,
    limits: {
       fieldSize: 1024 * 1024 * 3,
 },
 });


//tuyen duong doc tung tren xuong

router.get('/invoice', coursecontroller.invoice);
router.get('/chat', coursecontroller.chat);
router.get('/create', coursecontroller.create);
router.post('/store',upload.single('image'), coursecontroller.store);
router.get('/:id/edit', coursecontroller.edit);
router.post('/handle-form-actions', coursecontroller.handleFormAction);
router.post('/handed-form-actions', coursecontroller.handedFormAction);
router.put('/:id', coursecontroller.update);
router.patch('/:id/restore', coursecontroller.restore);
router.delete('/:id', coursecontroller.destroy);
router.delete('/:id/force', coursecontroller.forceDestroy);
router.get('/:slug', coursecontroller.show);

module.exports = router;
