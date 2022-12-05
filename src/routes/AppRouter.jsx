import { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import { CircularProgress } from '@mui/material';

import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { CelinaRoutes } from "../celina/routes/CelinaRoutes"
import { useAuthStore } from "../hooks"

import './stylesSpinnerDiv.css'

export const AppRouter = () => {
  const {statusAuth, checkoutAuthToken} = useAuthStore()

  useEffect(() => {
    checkoutAuthToken()
  }, [])
  
  if ( statusAuth === 'checking' ) {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center container_spinner">
          <CircularProgress size={'5rem'} />
        </div>
    )
  }

  return (
    <Routes>
      {
        (statusAuth !== 'authenticated')
        ? <Route path="/auth/*" element={<AuthRoutes />} />
        : <Route path="/*" element={<CelinaRoutes />} />
      }
        
      <Route path="/*" element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
