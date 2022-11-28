
import MUIDataTable from "mui-datatables"

import { dataLibroMayor } from "../../../../assets/dataLibroMayor";

import './stylesBalances.css'

//* Estructura y Configuracion de la Tabla Balance General y
const columns = [
    {name: 'Fecha'},
    {name: 'Cuenta'},
    {name: 'Descripción'},
    {name: 'Debe'},
    {name: 'Haber'},
    {name: 'Saldo'},
  ]
  const options = {
    filterType: 'dropdown',
    responsive: 'simple'
  };

export const ItemReporteLibroMayor = () => {
  return (
    <>
      <MUIDataTable
          className='animate__animated animate__fadeIn'
          title={"Libro Mayor"}
          data={dataLibroMayor}
          columns={columns}
          options={options} 
      />

      <div className='fs-5 fw-bold animate__animated animate__fadeIn style_balance_table d-flex justify-content-between mb-3 py-2'>
        <span className="text-white ms-5">Totales</span>
        
        <div className="d-flex justify-content-between px-5">
            <span className='text-white mx-5'>L. 27.11</span>
            <span className='text-white mx-5'>L. 27.11</span>
            <span className='text-white mx-5'>L. 27.11</span>
        </div>
      </div>
    </>
  )
}
