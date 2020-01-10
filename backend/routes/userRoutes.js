const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest:'/images/'});
const userController  = require('../controllers/UserController');
router.post('/register',userController.postUser);
router.post('/login', userController.login);
router.get('/alluser',userController.users);
router.get("/edit/:id", userController.edit);
router.post("/update", userController.update);
router.get("/delete/:id", userController.delete);
router.get('/getUser', userController.getUserById);
router.post('/forgotPassword', userController.forgotPassword);
router.post('/newPassword', userController.newPassword);
router.post('/changePassword', userController.changePassword);
router.post('/auth/facebook', userController.loginFb);
router.post('/auth/google', userController.loginGoogle);
router.post('/upload',upload.any(),userController.upload);
router.get("/getImage", userController.getImage);
router.get("/getImagesWork", userController.getImagesWork);


module.exports = router;