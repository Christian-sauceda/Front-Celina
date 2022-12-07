import { useEffect } from "react";

import MUIDataTable from "mui-datatables"
import { CircularProgress } from '@mui/material';

// Custom Hooks
import { useBitacoraStore } from "../../../hooks";

export const BitacoraPage = () => {
  const {statusGetBitacora, dataBitacora, errorMessageGetBitacora, startGetBitacoraPorCodEmpresa} = useBitacoraStore()

  useEffect(() => { //* Traer Bitacora de la DB
    startGetBitacoraPorCodEmpresa()
  }, [])

  const columns = ["Operación", "Detalle", "Pantalla", "Tablas", "IP", "HostName", "Fecha Registro"]

  const options = {
    filterType: 'dropdown',
    responsive: 'simple'
  };

  return (
    <>
      <div className="container-fluid mt-5">
        {
          statusGetBitacora === 'error'
          ? <span>{errorMessageGetBitacora}</span>
          : (
            statusGetBitacora === 'checking'
            ? (
              <>
                <CircularProgress />
                <span>Cargando Bitacora...</span>
              </>
            ): (
              <MUIDataTable
                className='animate__animated animate__fadeIn'
                title={"Consulta Bitácora"}
                data={dataBitacora}
                columns={columns}
                options={options} 
              />
            )
          )
        }
      </div>
    </>
  )
}
