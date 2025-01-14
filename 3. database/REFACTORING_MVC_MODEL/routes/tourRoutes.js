const express = require('express') ;
const controller = require('../controller/tour_controller') ; 

const router = express.Router() ; 



router.route('/')
    .get(controller.getall)
    .post(controller.putone);

    // the above is an example that hoew  you can add 
    // custom middelware directly to your 
    // http verb handler , in this case post verb

router.route('/:id')
    .get(controller.getone)
    .patch(controller.update)
    .delete(controller.del);

module.exports = router ; 