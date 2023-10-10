const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, register , loginUser, getProfile} = require('../controllers/autControllers')

// middleware
router.use(
    cors({
        credentials:true,
        origin:'http://localhost:5173'
    })
)

router.get('/', test)
// router.get('/profile', getProfile)

router.post('/register', register)
router.post('/login', loginUser)

module.exports = router