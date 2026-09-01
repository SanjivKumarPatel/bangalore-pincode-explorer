import { useState } from 'react'

import SearchForm from './components/SearchForm'
import ResultCard from './components/ResultCard'
import { searchPincode } from './services/api'

function App() {
  const [pincode, setPincode] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async () => {
    setError('')
    setResult(null)

    if (!/^\d{6}$/.test(pincode)) {
      setError('Please enter a valid 6-digit pincode')
      return
    }

    try {
      setLoading(true)

      const response = await searchPincode(pincode)

      setResult(response.data)
    } catch (error) {
      setError(
        error.response?.data?.message ||
        'Something went wrong. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-300 to-gray-600 px-4 py-10">
      <div className="mx-auto max-w-xl">
        {/* Page heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Bangalore Pincode Explorer
          </h1>

          <p className="mt-3 text-gray-600">
            Find area and postal details using a Bangalore pincode
          </p>
        </div>

        {/* Pincode search form */}
        <SearchForm
          pincode={pincode}
          setPincode={setPincode}
          handleSearch={handleSearch}
          loading={loading}
        />

        {/* Error message */}
        {error && (
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Search result */}
        <ResultCard result={result} />
      </div>
    </main>
  )
}

export default App