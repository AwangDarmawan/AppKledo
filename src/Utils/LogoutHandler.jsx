import { logout } from "../Redux/userSlice"; 

export const handleLogout = (dispatch, navigate) => {
  dispatch(logout());
//   localStorage.removeItem('TOKEN');
//   localStorage.removeItem('USER');
  navigate('/');
};
