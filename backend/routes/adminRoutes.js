const express= require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest:'/images/'});
const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, '../frontend/src/assets/images/')
    },
    filename: (req, file, callBack) => {
        callBack(null, `hi_${file.originalname}`)
    }
})

const upload1 = multer({ storage: storage });
const controller = require('../controllers/AdminController');
router.get('/getUsers',controller.getUsers);
router.get('/getAdminData',controller.getAdminData);
router.get('/getHomepageData',controller.getHomepageData);
router.get('/editHome',controller.editHome);
router.post('/updateHome', controller.updateHome);
router.get('/deleteHomePage/:id',controller.deleteHomePage);
router.get('/getTeam', controller.getTeam);
router.get('/editTeam/:id', controller.editeTeam);
router.post('/createContact', controller.createContact);
router.get('/getContact', controller.getContact);
router.post('/updateContact', controller.updateContact);
router.get('/daleteContactPage/:id', controller.deleteContact);
router.get('/daleteTeamPage/:id', controller.deleteTeamPage);
router.get('/getMenu', controller.getMenu);
router.get('/editMenu/:id', controller.editeMenu);
router.post('/updateMenu', controller.updateMenu);
router.get('/deleteMenu/:id', controller.deleteMenu);
router.get('/getPrice', controller.getPrice);
router.post('/updateprice', controller.updateprice);
router.get('/deleteprice/:id', controller.deleteprice);
router.get('/getService', controller.getService);
router.get('/deleteService/:id', controller.deleteService);
router.post('/updateservice', upload.any('file'),controller.updateservice);
router.get('/getService1', controller.getService1);
router.get('/deleteService1/:id', controller.deleteService1);
router.get('/getService2', controller.getService2);
router.get('/deleteService2/:id', controller.deleteService2);
router.post('/updateService2', controller.updateService2);
router.get('/getService3', controller.getService3);
router.get('/deleteService3/:id', controller.deleteService3);
router.post('/updateService3', controller.updateService3);
router.get('/getFooter', controller.getFooter);
router.get('/deleteFooter/:id', controller.deleteFooter);
router.post('/updateFooter', controller.updateFooter);
router.post('/updateHomePagedata', upload1.array("files"), controller.updateHomePagedata);
router.post('/multipleFiles', upload1.array("files", ), controller.multipleFiles);
router.post('/updateHomePage', upload.any('file'), controller.updateHomePage);
router.post('/uploadWorkImages', upload.any('file'), controller.uploadWorkImages);
router.post('/createMenu',controller.createMenu);
router.get('/getImagesWork',controller.getImagesWork);
router.post('/updateImagesWork', upload.any('file'), controller.updateImagesWork);
router.post('/createTeamMember', upload.any('file'), controller.createTeamMember);
router.post('/createService', upload.any('file'), controller.createService);
router.get('/deleteImagesWork/:id', controller.deleteImagesWork);
router.post('/updateTeam',upload.any('file'), controller.updateTeam);
router.post('/createPrice', controller.createPrice);
router.get('/editePrice/:id', controller.editePrice);
router.get('/editeService/:id', controller.editeService);
router.get('/editeService1/:id', controller.editeService1);
router.get('/editeContact/:id', controller.editeContact);
router.post('/createServiceWithImages', upload.any('file'), controller.createServiceWithImages);
router.post('/updateService1',upload.any('file'), controller.updateService1);
router.post('/dragDrop', controller.dragDrop);
module.exports = router;
