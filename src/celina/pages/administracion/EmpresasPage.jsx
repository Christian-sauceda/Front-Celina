
import MUIDataTable from "mui-datatables"
import Button from '@mui/material/Button';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


//? DATA MOMENTANEA (LUEGO LA BORRARE)
import { dataEmpresas } from "../../../assets/dataEmpresas";
import { EmpresasModal } from "./";

// Custom Hooks
import { useUiStoreEmpresas } from "../../../hooks";

export const EmpresasPage = () => {
  // const columns = ["Nombre", "RTN", "Sitio Web", "Email", "Telefono", "Celular", "Direccion", "Ciudad", "Estado", "Pais", "Editar", "Eliminar"];
  const {openEmpresasModal} = useUiStoreEmpresas() // Hook para Abrir Modal de Empresas

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

  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-end">
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
          data={dataEmpresas}
          columns={columns}
          options={options} 
        />
      </div>

      <EmpresasModal />
    </>
  )
}
