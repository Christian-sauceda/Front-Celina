

import './styleTableDetalle.css'

export const TableDetalle = ({id_elemento}) => {

    //TODO Tomara el "id_elemento" y le quitara la palabra "id" para luego consutarlo en la DB

  return (
    <div className="collapse animate__animated animate__fadeIn prueba" id={id_elemento}>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Cuenta</th>
                    <th scope="col">Movimiento</th>
                    <th scope="col">Valor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">110201 BANCO FICOHSA</th>
                    <td>D</td>
                    <td>4,200.00</td>
                </tr>
                <tr>
                    <th scope="row">110201 BANCO FICOHSA BANCO FICOHSA</th>
                    <td>A</td>
                    <td>4,200.00</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
