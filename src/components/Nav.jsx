import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faBriefcase, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Nav = () => {
    const [navOpen, setNavOpen] = useState(true)
  return (
    <div>
      <nav className="py-4 px-10 fixed  w-full bg-blue-600">
      <div className="container  ">
        <div className="flex justify-between">
            <div className="flex flex-row-reverse gap-2 ">
                
                <span className="my-auto font-semibold text-xl text-white">KLEDO TEST</span>
            </div>
          
          <img
            onClick={() => setNavOpen(!navOpen)}
            alt=""
            className="order-2 sm:order-1 lg:hidden bg-white"
          />
          <div className="order-2 hidden lg:block">
            <ul className="flex gap-16">
              <li>
                <Link to="/profile" className="text-white  text-sm font-black hover:  hover:bg-sky-700 ">
                  Profil
                </Link>
              </li>
              <li>
                <Link to="/" className="text-white  text-sm font-black hover:bg-sky-700  ">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {navOpen && (
          <div
            className="z-50 fixed bottom-0 right-0 left-0 p-4  bg-blue-600 border lg:hidden "
          >
            <ul className="flex justify-between">
              <li>
                < Link to="" className="flex justify-center flex-col items-center gap-1 hover:bg-sky-700 ">
                <FontAwesomeIcon icon={faHome}  className="text-white"/> 
                  <span className=" text-white font-black text-base ">Profil</span>
                </Link>
              </li>
              <li>
                < Link to="" className="flex justify-center flex-col items-center gap-1 hover:bg-sky-700">
                <FontAwesomeIcon icon={faLightbulb} className="text-white" />
                  <span className="text-white font-black text-base text-bold">Login</span>
                </Link>
              </li>
              <li>
                < Link to="" className="flex justify-center flex-col items-center gap-1 hover:bg-sky-700">
                <FontAwesomeIcon icon={faBriefcase} className="text-white" /> 
                  <span className="text-white font-black text-base text-bold">
                  My creation</span>
                </Link>
              </li>
              <li>
                < Link to="" className="flex justify-center flex-col items-center gap-1 hover:bg-sky-700">
                <FontAwesomeIcon icon={faEnvelope} className="text-white"/> 
                  <span className="text-white font-black text-base text-bold">LogOut</span>
                </Link>
              </li>
              
            </ul>
           
          </div>
        )}
      </div>
    </nav>
    </div>
  )
}

export default Nav
