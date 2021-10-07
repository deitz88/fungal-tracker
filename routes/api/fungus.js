const express = require('express');
const router = express.Router();
const fungusCtrl = require('../../controllers/fungus');
// const multer = require('multer');
// const upload = multer();
/*---------- Public Routes ----------*/
router.post('/addfungus', fungusCtrl.addFungus);


/*---------- Protected Routes ----------*/




module.exports = router;