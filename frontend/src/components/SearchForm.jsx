function SearchForm({
  pincode,
  setPincode,
  handleSearch,
  loading
}) {
  const handleSubmit = (e) => {
    e.preventDefault()

    handleSearch()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-400 bg-slate-100 p-6 shadow-lg"
    >
      <label
        htmlFor="pincode"
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        Enter Bangalore Pincode
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="pincode"
          type="text"
          value={pincode}
          onChange={(e) => {
            const value = e.target.value.replace(/\D/g, '')
            setPincode(value)
          }}
          placeholder="Enter 6-digit pincode"
          maxLength="6"
          inputMode="numeric"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900 focus:ring-2 focus:ring-gray-200"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  )
}

export default SearchForm