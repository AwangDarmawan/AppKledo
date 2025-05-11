import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Navadmin from '../../components/Admin/Navadmin'
import Card from '../../components/Admin/Card'
export default function Dashboard() {
  return (
    <>
      <Navadmin/>
      <div className="flex h-screen">
        <Sidebar />
      <div className="flex-1  bg-gray-200">
        <Card />
      </div>
    </div>
    </>
  )
}
