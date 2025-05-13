import { logout } from "../Redux/userSlice"; 

export const handleLogout = (dispatch, navigate) => {
  dispatch(logout());
  navigate('/');
};
