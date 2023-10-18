import express from 'express'
import { creteListing, deleteListing, updateListing, getListing } from '../controllers/listing.controller.js'
import { verifyToken } from '../utils/VerifyUser.js'

const router = express.Router()

router.post('/create', verifyToken, creteListing)
router.delete('/delete/:id', verifyToken, deleteListing)
router.post('/update/:id', verifyToken, updateListing)
router.get('/get/:id',  getListing)

export default router;