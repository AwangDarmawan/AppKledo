import React from 'react'
import { useSelector } from 'react-redux';
export default function Card() {
  const user = useSelector((state) => state.user.user);
  console.log("nama user admin",user)
  
  return (
    <>
     <div className=" m-3 w-full">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="grid place-items-center">
        <div className="bg-gray-100 rounded-lg w-full max-w-4xl h-64 flex flex-col justify-center items-center shadow">
          <h3 className="text-3xl font-semibold text-gray-700 mb-2">Selamat Datang</h3>
          <p className="text-lg text-gray-500">{user?.name || 'Login First'}</p>
        </div>
      </div>
    </div>

    </>
  )
}
