function ResultCard({ result }) {
  if (!result) {
    return null
  }

  const details = [
    {
      label: 'Pincode',
      value: result.pincode
    },
    {
      label: 'Area',
      value: result.area
    },
    {
      label: 'District',
      value: result.district
    },
    {
      label: 'State',
      value: result.state
    }
  ]

  return (
    <div className="mt-6 rounded-2xl border border-gray-400 bg-white p-6 shadow-lg">
      <h2 className="mb-5 text-xl font-semibold text-gray-900">
        Pincode Details
      </h2>

      <div className="divide-y divide-gray-400">
        {details.map((detail) => (
          <div
            key={detail.label}
            className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
          >
            <span className="text-sm text-gray-500">
              {detail.label}
            </span>

            <span className="text-right font-medium text-gray-900">
              {detail.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResultCard