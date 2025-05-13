import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from './pages/Auth';
// User
import Cardprofile from './pages/Cardprofile';
// admin
import Dashboard from './pages/Admin/Dashboard'
import Shipingcomp from './pages/Admin/Shipingcomp';
import Createshping from './pages/Admin/Createshping';
import Updateshping from './pages/Admin/Updateshping';
function App() {


  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/profile" element={<Cardprofile />} />
        {/* Admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shping" element={<Shipingcomp />} />
        <Route path="/createshping" element={<Createshping />} />
         <Route path="/update-shipping/:id" element={<Updateshping />} />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
    </>
  )
}

export default App
