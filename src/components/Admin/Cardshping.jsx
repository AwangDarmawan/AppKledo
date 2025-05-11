import React from 'react'

function Cardshping() {
  return (
    <>
      {/* <div className="flex min-h-screen bg-gray-200"> */}
      

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Header Card */}
        <div className="bg-white rounded-lg shadow p-6 ">
          <div className="flex gap-2">
            <h2 className="text-xl font-semibold text-gray-700">
              Shipping Comps
            </h2>
            <div className='flex-1 justify-content-between'>
            <button className="text-white text-center p-2 bg-blue-500  hover:bg-blue-600">
              <span className="text-lg">+</span>
            </button>
          </div>

          {/* Search Input */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Cari"
              className="w-64 px-4 py-2 border rounded focus:outline-none"
            />
          </div>
         </div>
          {/* Empty Table */}
          <table className="w-full text-left border-t border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-3">Nama</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 text-gray-400 italic">Tidak ada data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
     
    </>
  )
}

export default Cardshping
