import React from 'react'
import { useSelector } from 'react-redux';

function Navadmin() {
  const user = useSelector((state) => state.user.user);
  
  console.log("nama user Nav",user)
  return (
    <>
       <div className="bg-blue-600 h-14 flex justify-between items-center px-6 text-white">

      <h1 className="text-lg font-bold">APP KLEDO</h1>

     
      <div className="flex items-center gap-2">
        <img
          src={user?.profile_image || "https://i.pravatar.cc/40"}
          alt="avatar"
          className="rounded-full w-8 h-8"
        />
        <span className="font-semibold">{user?.name || 'Login First'}</span>
      </div>
    </div>
    </>
  )
}

export default Navadmin
