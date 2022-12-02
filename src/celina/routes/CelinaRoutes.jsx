import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"

import { SelectEmpresaPage } from "../pages"
import { CelinaRoutesWithNavbar } from "./CelinaRoutesWithNavbar"

export const CelinaRoutes = () => {

  // TODO Corregir de NOOO dejar que el usuario entre a la seccion de "inicio" sin haber seleccionado primeramente una empresa (ya que si no hago esto el usuario facilmente podria ingresar la URL manualmente y generar un bug...)
  // TODO NECESITO COMPROBAR si hay alguna empresa seleciconada para dejar o quitar la ruta de "inicio" y eliminar la de "empresas-init" para luego solo cargarla en caso de que "eliminemos de nuevo la empresa del store 'empresaSeleccionada' "
  const {statusSelectEmpresa} = useSelector(state => state.selectEmpresa)

  return (
    <Routes>
       
        {/* Paginas iniciales con Menu*/}
        {/* <Route path="/*" element={<CelinaRoutesWithNavbar />} /> */}

        {
          (statusSelectEmpresa === 'selected') //! Comprueba si hay alguna empresa seleccionada
          ? <Route path="/*" element={<CelinaRoutesWithNavbar />} />
          : <Route path="/empresas-init" element={<SelectEmpresaPage />} />
        }

          <Route path="/*" element={<Navigate to='/empresas-init' />} />

         {/* Paginas iniciales sin Menu*/}
         {/* <Route path="/empresas-init" element={<SelectEmpresaPage />} /> */}
    </Routes>
  )
}
