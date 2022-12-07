
import MUIDataTable from "mui-datatables"
import Button from '@mui/material/Button';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CircularProgress } from '@mui/material';
import { useEffect } from "react";

// Components
import { UsuariosModal } from "./";

// Custom Hooks
import { useUiStoreUsuarios, useUsuariosStore } from "../../../hooks";

export const UsuariosPage = () => {
  const {openUsuariosModal} = useUiStoreUsuarios() // Hook para Abrir Modal de Usuarios
  const {statusGetUsuarios, dataUsuarios, errorMessageGetUsuarios, startGetUsuarios} = useUsuariosStore() // Hook para traer Usuarios de la DB

  const columns = [
    {name: 'Nombre de Usuario'},
    {name: 'Primer Nombre'},
    {name: 'Segundo Nombre'},
    {name: 'Apellidos'},
    {name: 'Email'},
    {name: 'Sexo'},
    // {name: 'Estado Civil'},
    {name: 'Edad'},
    {name: 'Telefono Movil'},
    {name: 'Tipo Usuario'},
    {name: 'Pais'},
    {name: 'Estado'},
    {name: 'Ciudad'},
    {name: 'Accion', options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <>
            <Button className="mb-2" onClick={openUsuariosModal} fullWidth variant="outlined" startIcon={<EditIcon />}>
              Editar
            </Button>
            <Button fullWidth variant="outlined" startIcon={<DeleteIcon />}>
              Eliminar
            </Button>
          </>
        )
      }
    }},
  ]
  const options = {
    filterType: 'dropdown',
    responsive: 'simple'
  };

  useEffect(() => { //* Traer usuarios de la DB
    startGetUsuarios()
  }, [])

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

        {
          statusGetUsuarios === 'error' //* Enviar si de verdad hay usuarios
          ? <span>{errorMessageGetUsuarios}</span>
          : (
            statusGetUsuarios === 'checking'
            ? (
              <>
                <CircularProgress />
                <span>Buscando usuarios...</span>
              </>
            )
            : 
            (
              <MUIDataTable
                className='animate__animated animate__fadeIn'
                title={"Usuarios"}
                data={dataUsuarios}
                columns={columns}
                options={options} 
              />
          )
          )
        }
        
      </div>

      <UsuariosModal />
    </>
  )
}


