
import MUIDataTable from "mui-datatables"
import { dataReporteGrupalBalanza } from "../../../../assets/dataReporteGrupalBalanza";

import './stylesBalances.css'

//* Estructura y Configuracion de la Tabla Balance General y
const columns = [
    {name: 'Cuentas'},
    {name: 'Movimiento Deudor'},
    {name: 'Movimiento Acreedor'},
    {name: 'Saldo Deudor'},
    {name: 'Saldo Acreedor'},
  ]
const options = {
    filterType: 'dropdown',
    responsive: 'simple'
  };

export const ItemReporteGrupalBalanza = () => {
  return (
    <>
      <MUIDataTable
          className='animate__animated animate__fadeIn'
          title={"Reporte Grupal"}
          data={dataReporteGrupalBalanza}
          columns={columns}
          options={options} 
      />
      <div className='fs-5 fw-bold animate__animated animate__fadeIn style_balance_table '>
          <table className='table'>
          <tbody>
              <tr>
                <th className='text-white' scope="row">Totales</th>
                <td className='text-white'>L. 0.00</td>
                <td className='text-white'>L. 0.00</td>
                <td className='text-white'>L. 0.00</td>
                <td className='text-white'>L. 0.00</td>
              </tr>
          </tbody>
          </table>
      </div>
    </>
  )
}
