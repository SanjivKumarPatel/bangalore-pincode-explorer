import axios from 'axios'

const api = axios.create({
  baseURL: 'https://bangalore-pincode-explorer-sp0z.onrender.com/api'
})

export const searchPincode = async (pincode) => {
  const response = await api.get(`/pincode/${pincode}`)

  return response.data
}