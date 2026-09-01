import axios from 'axios'

/**
 * @desc Search area details using a pincode
 * @route GET /api/pincode/:pincode
 * @access Public
 */

export const searchPincode = async (req, res) => {
  try {
    const { pincode } = req.params

    if (!/^\d{6}$/.test(pincode)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid 6-digit pincode'
      })
    }

    const response = await axios.get(
      `https://api.postalpincode.in/pincode/${pincode}`
    )

    const result = response.data[0]

    if (result.Status !== 'Success' || !result.PostOffice) {
      return res.status(404).json({
        success: false,
        message: 'No area found for this pincode'
      })
    }

    const postOffice = result.PostOffice[0]

    return res.status(200).json({
      success: true,
      message: 'Pincode details fetched successfully',
      data: {
        pincode: postOffice.Pincode,
        area: postOffice.Name,
        district: postOffice.District,
        state: postOffice.State
      }
    })
  } catch (error) {
    console.error('Pincode search error:', error.message)

    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
}