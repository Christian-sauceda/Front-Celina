
export const EmpresasTablaExcel = ({dataEmpresas}) => {

  return (
    <table className="table d-none" id="miTablita">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">RTN</th>
            <th scope="col">Sitio Web</th>
            <th scope="col">Email</th>
            <th scope="col">Telefono</th>
            <th scope="col">Celular</th>
            <th scope="col">Direccion</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Estado</th>
            <th scope="col">Pais</th>
          </tr>
        </thead>
        <tbody>
          {
            dataEmpresas.map(e => (
              <tr key={e.COD_EMPRESA}>
                <td>{e.NOMBRE}</td>
                <td>{e.RTN}</td>
                <td>{e.SERVEREMAIL}</td>
                <td>{e.USEREMAIL}</td>
                <td>{e.NUMEROS.split('|')[1].split(':')[1]}</td>
                <td>{e.NUMEROS.split('|')[0].split(':')[1]}</td>
                <td>{e.ADDRESS}</td>
                <td>{e.NAM_CITY}</td>
                <td>{e.NAME_STATE}</td>
                <td>{e.NAM_COUNTRY}</td>
              </tr>
            ))
          }
        </tbody>
    </table>
  )
}
