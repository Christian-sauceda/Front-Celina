import { Navigate, Route, Routes } from "react-router-dom"
import { AsientosPage, EmpresasPage, UsuariosPage } from "./"

export const AdministracionRoutes = () => {
  return (
    <Routes>
            <Route path="/tipo-asientos" element={<AsientosPage />} />
            <Route path="/empresas" element={<EmpresasPage />} />
            <Route path="/usuarios" element={<UsuariosPage />} />

            <Route path="/*" element={<Navigate to='/' />} />
    </Routes>
  )
}
