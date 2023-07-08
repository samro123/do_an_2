const path = require('path');
const express = require('express');
const morgan = require('morgan');
const  methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const SortMiddleware = require('./app/middleware/SortMiddleware');
const route = require('./routes');
const db = require('./config/db');

//Conect Db
db.connect();

//
const app = express();
const port = 3000;

//join vao filer
app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

//Custom middleware
app.use(SortMiddleware);

//upload anh
app.use('/uploads' ,express.static('uploads'));
app.get('/middleware',
function(req, res, next){
   if (['vethuong', 'vevip'].includes(req.query.ve)){
       req.face = 'Gach Gach gach !!';
       return next();
   }
   res.status(403).json({message: 'Access denied'});
},
 function(req, res, next){
    res.json({
        message: 'Successfully!',
        face: req.face
    });
});
//HTPP logger
//app.use(morgan('combined'));

app.use(
    express.urlencoded({
        extended: true,
    }),
); // duoi dang form de url xu li
app.use(express.json()); // duoi dang javastrip len
//templet engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: require('./helpers/handlebars'),
         
        
    }),
);
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

//Route inti khoi tao cua tuyen duong
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
