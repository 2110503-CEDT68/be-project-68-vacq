const express = require('express');
const { register ,login,logout,getMe,updatePassword} = require('../controllers/auth');

const router = express.Router();

const {protect}= require('../middleware/auth');

router.post('/register', register);
router.post('/login',login);
router.get('/logout',logout);
router.get('/me',protect,getMe);
//Update Password
router.put('/updatepassword', protect, updatePassword);

module.exports = router;
