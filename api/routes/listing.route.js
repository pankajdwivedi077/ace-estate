import express from 'express'
import { creteListing, deleteListing } from '../controllers/listing.controller.js'
import { verifyToken } from '../utils/VerifyUser.js'

const router = express.Router()

router.post('/create', verifyToken, creteListing)
router.delete('/delete/:id', verifyToken, deleteListing)

export default router;