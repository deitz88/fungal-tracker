const express = require('express');
const router = express.Router();
const fungusCtrl = require('../../controllers/fungus');
// const multer = require('multer');
// const upload = multer();
/*---------- Public Routes ----------*/
router.post('/addfungus', fungusCtrl.addFungus);
router.get('/getuserindex', fungusCtrl.getUserFungus)
router.post('/delete/:id', fungusCtrl.deleteFungus)


/*---------- Protected Routes ----------*/




module.exports = router;