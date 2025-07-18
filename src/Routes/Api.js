const express = require("express");
const ProfileController = require("../Controllers/ProfileController");
const AuthVerifyToken = require("../Middleware/AuthVerifyToken");
const router = express.Router();
const { getMessage, postMessage } = require('../Controllers/messageController');

router.get('/', getMessage);
router.post('/', postMessage);
router.post("/createProfile", ProfileController.CreateProfile);
router.post("/userLogin", ProfileController.UserLogin);
router.get("/getProfile", AuthVerifyToken, ProfileController.getProfile);
router.post("/updateProfile", AuthVerifyToken, ProfileController.upDateProfile);



module.exports = router;