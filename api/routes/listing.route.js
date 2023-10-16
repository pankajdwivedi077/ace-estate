import express from 'express'
import { creteListing } from '../controllers/listing.controller.js'
import { verifyToken } from '../utils/VerifyUser.js'

const router = express.Router()

router.post('/create', verifyToken, creteListing)

export default router;