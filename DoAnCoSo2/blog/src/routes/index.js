const newRoute = require('./news');
const blogRoute = require('./blog');
const blogdetailRoute = require('./blogdetail');
const contactRoute = require('./contact');
const checkoutRoute = require('./checkout');
const shopcartRoute = require('./shopcart');
const adminRoute = require('./admin');
const shopRoute = require('./shop');
const meRoute = require('./me');
const siteRoute = require('./site');
const coursesRoute = require('./courses');

function route(app) {
    app.use('/news', newRoute);
    app.use('/blog', blogRoute);
    app.use('/blogdetail', blogdetailRoute);
    app.use('/contact', contactRoute);
    app.use('/checkout', checkoutRoute);
    app.use('/shopcart', shopcartRoute);
    app.use('/admin', adminRoute);
    app.use('/shop', shopRoute);
    app.use('/me', meRoute);
    app.use('/courses', coursesRoute);
    app.use('/', siteRoute);
}

module.exports = route;
