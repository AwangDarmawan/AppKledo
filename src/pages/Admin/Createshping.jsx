import React from 'react'

import Sidebar from '../../components/Admin/Sidebar'
import Navadmin from '../../components/Admin/Navadmin'
import Cardcreateshping from '../../components/Admin/CardCreateshping'

function Createshping() {
  return (
    <>
       <Navadmin/>
      <div className="flex h-screen">
        <Sidebar />
      <div className="flex-1  bg-gray-200">
        <Cardcreateshping />
      </div>
    </div>
    </>
  )
}

export default Createshping
