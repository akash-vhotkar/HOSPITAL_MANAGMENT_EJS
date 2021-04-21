const express = require('express');
const formcontroller = require('../controller/FormsController');
const router = express.Router();
router.get('/', formcontroller().getallpationts);
router.get('/addpationt', formcontroller().getpationform)
router.post('/addpationt', formcontroller().handelpationtform)

module.exports = router;