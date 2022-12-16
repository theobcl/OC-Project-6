const multer = require("../middleware/multer-config");
const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const sauceCtrl = require("../controllers/sauce")

router.get('/', auth, sauceCtrl.getAllSauce); 
router.post('/', auth, multer, sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);

module.exports = router;