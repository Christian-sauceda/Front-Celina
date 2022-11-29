
import MUIDataTable from "mui-datatables"
import { dataReporteDetallado } from "../../../../assets/dataReporteDetallado"

import './stylesBalances.css'

//* Estructura y Configuracion de la Tabla Balance General y
const columns = [
    {name: 'Cuentas'},
    {name: 'SubCuenta'},
    {name: 'Saldos'},
    {name: 'Total Cuenta'},
    {name: 'Total General'},
]
const options = {
    filterType: 'dropdown',
    responsive: 'simple'
};

export const ItemReporteDetalladoBalance = () => {
  return (

    <>
        <MUIDataTable
            className='animate__animated animate__fadeIn'
            title={"Reporte Detallado"}
            data={dataReporteDetallado}
            columns={columns}
            options={options} 
        />
        <div className='fs-5 fw-bold animate__animated animate__fadeIn style_balance_table '>
            <table className='table'>
            <tbody>
                <tr>
                <th className='text-white' scope="row">Diferencias de la Operación</th>
                <td></td>
                <td></td>
                <td className='text-white'>L. {42 * 3}</td>
                </tr>
            </tbody>
            </table>
        </div>
    </>
  )
}
