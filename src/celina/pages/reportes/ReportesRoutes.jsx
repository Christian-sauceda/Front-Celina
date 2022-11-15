import { Navigate, Route, Routes } from "react-router-dom"

import { BalanceGeneralPage, BalanzaComprobacionPage, EstadoResultadoPage, LibroDiarioPage, LibroMayorPage } from "./"

export const ReportesRoutes = () => {
  return (
    <Routes>
        <Route path="/balancegeneral" element={<BalanceGeneralPage />} />
        <Route path="/balanzacomprobacion" element={<BalanzaComprobacionPage />} />
        <Route path="/estadoresultado" element={<EstadoResultadoPage />} />
        <Route path="/librodiario" element={<LibroDiarioPage />} />
        <Route path="/libromayor" element={<LibroMayorPage />} />

        <Route path="/*" element={<Navigate to='/' />} />
    </Routes>
  )
}
