import express from 'express'

import {signup, login, logout, trangchu} from '../controllers/auth.controller.js'

const router = express.Router()


router.get('/signup', signup)
router.get('/login', login)
router.get('/logout', logout)
router.get('/', trangchu)
router.get('/banhang', async function(req, res) {
    res.send("BAN HANG")
})

export default router