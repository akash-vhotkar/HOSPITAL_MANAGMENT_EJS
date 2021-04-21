const express = require('express');
const formcontroller = require('../controller/FormsController');
const router = express.Router();
router.get('/', formcontroller().getallhospitals);
router.post('/addhospital', formcontroller().handelhospitalform)
router.get('/addhospital', formcontroller().gethospitalform)
module.exports = router;