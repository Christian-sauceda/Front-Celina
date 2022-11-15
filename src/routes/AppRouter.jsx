import { Navigate, Route, Routes } from "react-router-dom"

import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { CelinaRoutes } from "../celina/routes/CelinaRoutes"

export const AppRouter = () => {

  const stateAuth = 'authenticated'; //* not-authenticated 

  return (
    <Routes>
      {
        (stateAuth === 'not-authenticated')
        ? <Route path="/auth/*" element={<AuthRoutes />} />
        : <Route path="/*" element={<CelinaRoutes />} />
      }
        
        <Route path="/*" element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
