const express = require('express') ;
const controller = require('../controllers/user_controller') ; 

const router = express.Router() ; 

// router
//   .route('/top-5-cheap')
//   .get(controller.aliasTopTours, controller.getall);


router.route('/userlist')
      .get()


router.route('/user')
    .get(controller.getuser) 
    .post(controller.putone)


router.route('/follow')
    .post(controller.follow)

router.route('/rank')
    .post(controller.rank)

router.route('/userquerylist')
      .get(controller.getUserQuery)

router.route('/users/all')
      .get(controller.getAllUsersSortedByPoints)

module.exports = router ;