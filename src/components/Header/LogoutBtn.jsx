import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/Auth'
import logout  from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'

function LogoutBtn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const logoutHandler = () => {
    //   authService.logout().then(()=>{
    //     navigate("/")
    //     dispatch(logout());
    //     })
    //     .catch((err)=>{
    //         throw err;
    //     })
    // }
    // const logoutHandler = () => {
    //   authService.logout()
    //   .then(() => {
    //     setTimeout(() => {
    //         navigate("/");
    //         dispatch(logout());
    //       }, 100); // Add a 100ms delay
    //     })
    //     .catch((err) => {
    //       throw err;
    //     });
    // };

    // const logoutHandler = async () => {
    //   try {
    //     await authService.logout();
    //     setTimeout(() => {
    //       dispatch(logout());
    //       navigate("/");
    //     }, 100);
    //   } catch (err) {
    //     console.error(err);
    //     alert('Logout failed. Please try again.');
    //   }
    // };

    const logoutHandler = async () => {
      try {
        await authService.logout();
        navigate("/");
        dispatch(logout());
      } catch (err) {
        console.error(err);
        alert('Logout failed. Please try again.');
      }
    };

    // const logoutHandler = async () => {
    //   try {
    //     console.log('Logging out...');
    //     await authService.logout();
    //     console.log('Navigating to /...');
    //     navigate('/', { 
    //       replace: true, 
    //       callback: () => console.log('Navigation complete')
    //     });
    //     console.log('Dispatching logout action...');
    //     dispatch(logout());
    //   } catch (err) {
    //     console.error(err);
    //     alert('Logout failed. Please try again.');
    //   }
    // };
    
  return (
    <Button
    to="/"
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}>Logout</Button>
  )
}

export default LogoutBtn