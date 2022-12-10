const multer = require("multer")
const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const sauceCtrl = require("../controllers/sauce")

router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, multer, sauceCtrl.deleteSauce);