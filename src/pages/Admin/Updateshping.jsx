import React from 'react'
import Cardupdateshping from '../../components/Admin/Cardupdateshping'
import Navadmin from '../../components/Admin/Navadmin'
import Sidebar from '../../components/Admin/Sidebar'

function Updateshping() {
  return (
    <>
      <Navadmin/>
      <div className="flex h-screen">
        <Sidebar />
      <div className="flex-1  bg-gray-200">
        <Cardupdateshping />
      </div>
    </div>
    </>
  )
}

export default Updateshping
