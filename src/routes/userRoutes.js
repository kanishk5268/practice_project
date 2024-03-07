const Router = require('express');
const userController  = require('../controllers/userController');
const upload = require('./../middlewares/multer');
const verifyJWT = require('./../middlewares/auth');
const router = Router()

router.route('/register').post(
    upload.fields([
        {
            name:"avatar",
            maxCount: 1
        },
        {
            name:"coverImage",
            maxCount: 1
        }
    ]),
    userController.registerUser
    )
// router.route('/login').post(loginUser)

router.route('/login').post(userController.loginUser)

//secured routes

router.route("/logout").post(verifyJWT,userController.logoutUser)

module.exports = router