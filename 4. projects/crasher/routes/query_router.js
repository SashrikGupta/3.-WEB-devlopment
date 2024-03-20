const express = require('express') ;
const controller = require('../controllers/query_controller') ; 

const router = express.Router() ; 


router.route('/post')
      .post(controller.postQuery)

router.route('/getall')
      .get(controller.getall)



module.exports = router ;