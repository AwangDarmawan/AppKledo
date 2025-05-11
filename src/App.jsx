
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from './pages/Auth';
// admin
import Dashboard from './pages/Admin/Dashboard'
import Shipingcomp from './pages/Admin/Shipingcomp';
// User
import Cardprofile from './pages/Cardprofile';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </BrowserRouter>
    </>
  )
}

export default App
