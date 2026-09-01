import express from 'express'

import { searchPincode } from '../controllers/pincodeController.js'

const pincodeRouter = express.Router()

/**
 * @desc Search area details using a pincode
 * @route GET /api/pincode/:pincode
 * @access Public
 */

pincodeRouter.get('/:pincode', searchPincode)

export default pincodeRouter