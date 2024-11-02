import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/Auth'
import {logout}  from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'

function LogoutBtn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
            navigate("/login")
          })

    }

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
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}>Logout</Button>
  )
}

export default LogoutBtn