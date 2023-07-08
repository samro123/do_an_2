const express = require('express');
const router = express.Router();
const mecontroller = require('../app/controllers/Mecontroller');

//tuyen duong doc tung tren xuong
router.get('/stored/courses', mecontroller.storedCourses);
router.get('/trash/courses', mecontroller.trashCourses);

module.exports = router;
