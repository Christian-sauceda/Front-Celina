import { Navigate, Route, Routes } from "react-router-dom"
import { Sidebar } from "../../ui"
import { InicioPage, ReportesRoutes, ContabilidadRoutes, AdministracionRoutes, UtilidadesRoutes, PerfilRoutes } from "../pages"


export const CelinaRoutesWithNavbar = () => {
  return (
    <Sidebar>
        <Routes>
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
            {/* <Route path="/*" element={<Navigate to='/empresas-init' />} /> */}
            <Route path="/*" element={<Navigate to='/inicio' />} />

        </Routes>
    </Sidebar>
  )
}
