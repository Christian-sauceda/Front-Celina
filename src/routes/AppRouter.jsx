import { useDispatch, useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"

import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { CelinaRoutes } from "../celina/routes/CelinaRoutes"

export const AppRouter = () => {
  const dispatch = useDispatch()
  const {statusAuth} = useSelector(state => state.auth)

  return (
    <Routes>
      {
        (statusAuth === 'not-authenticated')
        ? <Route path="/auth/*" element={<AuthRoutes />} />
        : <Route path="/*" element={<CelinaRoutes />} />
      }
        
        <Route path="/*" element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
