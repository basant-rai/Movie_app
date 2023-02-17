import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isAuthenticated } from '../../Api/userApi'

const LoginRoute = () => {
  return (
    <>
      {
        isAuthenticated() && isAuthenticated().user.role === 0 ?
          <Navigate to='/profile' replace={true} /> :
          <Outlet />
      }
    </>

  )
}

export default LoginRoute