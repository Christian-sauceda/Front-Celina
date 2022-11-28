
import MUIDataTable from "mui-datatables"
import { dataReporteGrupalBalanza } from "../../../../assets/dataReporteGrupalBalanza";

import './stylesBalances.css'

//* Estructura y Configuracion de la Tabla Balance General y
const columns = [
    {name: 'Cuentas'},
    {name: 'Saldos'},
    {name: 'Totales'},
  ]
const options = {
    filterType: 'dropdown',
    responsive: 'simple'
  };


export const ItemReporteGrupalEstadoResultado = () => {
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
                    <th className='text-white' scope="row">Resultados de la Operación</th>
                    <td></td>
                    <td></td>
                    <td className='text-white'>L. 27.11</td>
                </tr>
            </tbody>
            </table>
        </div>
    </>
  )
}
