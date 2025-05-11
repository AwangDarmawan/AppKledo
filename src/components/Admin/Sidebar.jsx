import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faTruck, faDeleteLeft} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { handleLogout } from '../../Utils/LogoutHandler';
export default function Sidebar() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      
      <nav className="p-4 flex flex-col gap-y-4 ">
        <Link to="/dashboard" className="flex items-center gap-2 text-gray-500 hover:text-blue-600">
            <FontAwesomeIcon icon={faHouse} />
           Dashboard
        </Link>
        <Link to="/shping" className="flex items-center gap-2 text-gray-500 hover:text-blue-600">
        <FontAwesomeIcon icon={faTruck} /> 
          Shipping Comps
        </Link>
        <button
          onClick={() => handleLogout(dispatch, navigate)}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600"
        >
          <FontAwesomeIcon icon={faDeleteLeft} />
          Logout
        </button>
      </nav>
   
    </>
  )
}
