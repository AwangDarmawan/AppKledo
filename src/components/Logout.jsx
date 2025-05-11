import { useDispatch } from 'react-redux';
import { logout } from '../Redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
  
    dispatch(logout());

   
    // localStorage.removeItem('token');

    navigate('/');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
