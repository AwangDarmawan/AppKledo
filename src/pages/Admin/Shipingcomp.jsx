import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Navadmin from '../../components/Admin/Navadmin'
import Cardshiping from '../../components/Admin/Cardshping'

function Shipingcomp() {
  return (
    <>
      <Navadmin/>
      <div className="flex h-screen">
        <Sidebar />
      <div className="flex-1  bg-gray-200">
        <Cardshiping />
      </div>
    </div>
    </>
  )
}

export default Shipingcomp
