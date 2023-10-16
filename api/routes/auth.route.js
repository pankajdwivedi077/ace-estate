import express from 'express'
import { signup, signin, google, singOut } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup',signup)
router.post('/signin', signin)
router.post('/google', google)
router.get('/signout', singOut)

export default router;