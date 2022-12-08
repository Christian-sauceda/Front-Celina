
import MUIDataTable from "mui-datatables"
import Button from '@mui/material/Button';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';

// Para exportar a Excel
import ReactHTMLTableToExcel from 'react-html-table-to-excel'

// Para exportar a PDF
import jsPDF from 'jspdf'
import 'jspdf-autotable'

// Custom Hooks
import { useEmpresasStore, useUiStoreEmpresas } from "../../../hooks";

// Components
import { EmpresasModal, EmpresasTablaExcel } from "./";

export const EmpresasPage = () => {
  const {openEmpresasModal} = useUiStoreEmpresas() // Hook para Abrir Modal de Empresas
  const {dataEmpresas, startTablaGetEmpresasPorCodUserLogeado} = useEmpresasStore() //* Para traer las empresas de ese usuario con un formato en espesifico
  //! startTablaGetEmpresasPorCodUserLogeado Esta funcion devuelve un arreglo con un formato en espesifico de la lista de empresas que se cargaron cuando el usuario se logeo, asi envito hacerle de nuevo una peticion al servidor

  const columns = [
    {name: 'Nombre'},
    {name: 'RTN'},
    {name: 'Sitio Web'},
    {name: 'Email'},
    {name: 'Telefono'},
    {name: 'Celular'},
    {name: 'Direccion'},
    {name: 'Ciudad'},
    {name: 'Estado'},
    {name: 'Pais'},
    {name: 'Accion', options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <>
            <Button className="mb-2" onClick={openEmpresasModal} fullWidth variant="outlined" startIcon={<EditIcon />}>
              Editar
            </Button>
            <Button variant="outlined" fullWidth startIcon={<DeleteIcon />}>
              Eliminar
            </Button>
          </>
        )
      }
    }},
  ]
  const options = {
    filterType: 'dropdown',
    responsive: 'simple',
  };


  //* Funcion para DESCARGAR EL PDF 
  const downloadPdf = () =>{
    const doc = new jsPDF('landscape')
    doc.horizontalPageBreak = true
    doc.text('REPORTE DE LAS EMPRESAS DEL SISTEMA AppTeck ©', 20, 10)
    doc.autoTable({
      theme: 'striped',
      body: dataEmpresas.map(e => ({
        nombre: e.NOMBRE,
        rtn: e.RTN,
        website: e.WEB,
        email: e.SERVEREMAIL,
        telefono: e.NUMEROS,
        direccion: e.ADDRESS,
        ciudad: e.NAM_CITY,
        estado: e.NAME_STATE,
        pais: e.NAM_COUNTRY,
      })),
      columns: [
        {header: 'Nombre', dataKey: 'nombre'},
        {header: 'RTN', dataKey: 'rtn'},
        {header: 'Sitio Web', dataKey: 'website'},
        {header: 'Email', dataKey: 'email'},
        {header: 'Telefono', dataKey: 'telefono'},
        {header: 'Direccion', dataKey: 'direccion'},
        {header: 'Ciudad', dataKey: 'ciudad'},
        {header: 'Estado', dataKey: 'estado'},
        {header: 'Pais', dataKey: 'pais'},
      ]
    })
    doc.save('tablaprueba.pdf')
  }


  return ( //! Aqui no ocupo poner "spinner", cargas o ese tipo de cosas ya que la informacion se consulto desde que el usuario se logeo y esta en memoria
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-end">
          {/* Botones para exportar PDF o Excel */}
          <div className="d-flex me-5">
            {/* <Button type="button" variant="text" className="d-flex justify-content-center py-0 mx-2"> */}
              <ReactHTMLTableToExcel 
                id="btnExport"
                className="btn btn-success"
                table="miTablita"
                filename="pruebaexcel"
                sheet="paginas 1"
                buttonText="Excel"
              />
            {/* </Button> */}

            <Button
              type="button"
              className="mx-2"
              onClick={downloadPdf}
              sx={{background: '#ff1744', color: 'white'}}
            >
              PDF
            </Button>
          </div>
          {/* FIN de Botones para exportar PDF o Excel */}

          <Button
            type="button"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            <GroupAddIcon className="mx-2" />
            Agregar
          </Button>
         
        </div>

        <MUIDataTable
          className='animate__animated animate__fadeIn'
          title={"Empresas"}
          data={startTablaGetEmpresasPorCodUserLogeado()}
          columns={columns}
          options={options} 
        />
      </div>

      <EmpresasModal /> {/* Modal */}

      <EmpresasTablaExcel dataEmpresas={dataEmpresas} /> {/* Este componente ESTARA OCULTO a la vista del usuario, ya que solo lo utilizare para hacer compatible la libreria de "ReactHTMLTableToExcel" con los datos ya que "MUIDataTable" no lo es... */}
    </>
  )
}
