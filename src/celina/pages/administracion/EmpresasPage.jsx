
import MUIDataTable from "mui-datatables"
import Button from '@mui/material/Button';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


//? DATA MOMENTANEA (LUEGO LA BORRARE)
import { dataEmpresas } from "../../../assets/dataEmpresas";

export const EmpresasPage = () => {
  // const columns = ["Nombre", "RTN", "Sitio Web", "Email", "Telefono", "Celular", "Direccion", "Ciudad", "Estado", "Pais", "Editar", "Eliminar"];

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
    {name: 'Editar', options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Button variant="outlined" startIcon={<EditIcon />}>
            Editar
          </Button>
        )
      }
    }},
    {name: 'Eliminar', options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Eliminar
          </Button>
        )
      }
    }},
  ]
  const options = {
    filterType: 'checkbox',
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
          title={"Empresas"}
          data={dataEmpresas}
          columns={columns}
          options={options} 
        />
      </div>
    </>
  )
}
