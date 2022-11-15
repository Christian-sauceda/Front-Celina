import { Navigate, Route, Routes } from "react-router-dom"

import { CatalogoCuentasPage, GeneracionAsientosPage } from "./"

export const ContabilidadRoutes = () => {
  return (
        <Routes>
            <Route path="/catalogo-cuentas" element={<CatalogoCuentasPage />} />
            <Route path="/generacion-asientos" element={<GeneracionAsientosPage />} />

            <Route path="/*" element={<Navigate to='/' />} />
        </Routes>
    )
}
