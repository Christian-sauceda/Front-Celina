import { Navigate, Route, Routes } from "react-router-dom"
import { BitacoraPage } from "./"

export const UtilidadesRoutes = () => {
  return (
    <Routes>
        <Route path="/bitacora" element={<BitacoraPage />} />

        <Route path="/*" element={<Navigate to='/' />} />
    </Routes>
  )
}
