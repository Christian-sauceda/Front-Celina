import { Navigate, Route, Routes } from "react-router-dom"
import { PerfilPage } from "./"

export const PerfilRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<PerfilPage />} />
        <Route path="/*" element={<Navigate to='/' />} />
    </Routes>
  )
}
