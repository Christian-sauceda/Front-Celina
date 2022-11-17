
import MUIDataTable from "mui-datatables"
import Button from '@mui/material/Button';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

//? DATA MOMENTANEA (LUEGO LA BORRARE)
import {dataTipoAsientos} from '../../../assets/dataTipoAsientos'

export const AsientosPage = () => {
  // const columns = ["Nombre", "Descripcion", "Editar", "Eliminar"]
  const columns = [
    {name: 'Nombre'},
    {name: 'Descripcion'},
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
    }}
  ]

  const options = {
    filterType: 'dropdown',
    responsive: 'simple'
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
          title={"Tipos de Asientos"}
          data={dataTipoAsientos}
          columns={columns}
          options={options} 
        />
      </div>
    </>
  )
}
