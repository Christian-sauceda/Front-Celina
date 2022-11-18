import MUIDataTable from "mui-datatables"

//? DATA MOMENTANEA (LUEGO LA BORRARE)
import {dataBitacora} from '../../../assets/dataBitacora'

export const BitacoraPage = () => {
  const columns = ["Operación", "Detalle", "Pantalla", "Tablas", "IP", "HostName", "Fecha Registro"]

  const options = {
    filterType: 'dropdown',
    responsive: 'simple'
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <MUIDataTable
          className='animate__animated animate__fadeIn'
          title={"Consulta Bitácora"}
          data={dataBitacora}
          columns={columns}
          options={options} 
        />
      </div>
    </>
  )
}
