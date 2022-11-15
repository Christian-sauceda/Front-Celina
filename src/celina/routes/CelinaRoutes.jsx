import { Navigate, Route, Routes } from "react-router-dom"

import { SelectEmpresaPage, InicioPage, ReportesRoutes, ContabilidadRoutes, AdministracionRoutes, UtilidadesRoutes, PerfilRoutes } from "../pages"

export const CelinaRoutes = () => {

  return (
    <Routes>
        {/* Paginas iniciales */}
        <Route path="/empresas-init" element={<SelectEmpresaPage />} />
        <Route path="/inicio" element={<InicioPage />} />

        {/* Pagina de perfil */}
        <Route path="/profile/*" element={<PerfilRoutes />} />

        {/* Paginas de la parte de Administracion */}
        <Route path="/administracion/*" element={<AdministracionRoutes />} />

        {/* Paginas de la parte de Contabilidad */}
        <Route path="/contabilidad/*" element={<ContabilidadRoutes />} />

        {/* Paginas de la parte de reportes */}
        <Route path="/reportes/*" element={<ReportesRoutes />} />

        {/* Paginas de la parte de Utilidades */}
        <Route path="/utilidades/*" element={<UtilidadesRoutes />} />

        {/* "404" */}
        <Route path="/*" element={<Navigate to='/inicio' />} />
    </Routes>
  )
}
