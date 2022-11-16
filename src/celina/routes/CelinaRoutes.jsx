import { Navigate, Route, Routes } from "react-router-dom"

import { SelectEmpresaPage } from "../pages"
import { CelinaRoutesWithNavbar } from "./CelinaRoutesWithNavbar"

export const CelinaRoutes = () => {

  return (
    <Routes>
        {/* Paginas iniciales sin Menu*/}
        <Route path="/empresas-init" element={<SelectEmpresaPage />} />


        {/* Paginas iniciales con Menu*/}
        <Route path="/*" element={<CelinaRoutesWithNavbar />} />
    </Routes>
  )
}
