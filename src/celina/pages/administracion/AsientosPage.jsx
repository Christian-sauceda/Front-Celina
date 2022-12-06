import { useEffect } from "react";

import MUIDataTable from "mui-datatables"
import Button from '@mui/material/Button';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { CircularProgress } from '@mui/material';

// Components
import { AsientosModal } from "./";

// Hooks
import { useTipoAsientosStore, useUiStoreAsientos } from "../../../hooks";

export const AsientosPage = () => {
  const {openAsientosModal} = useUiStoreAsientos()
  const {statusGetTipoAsientos, dataTipoAsientos, errorMessageGetTipoAsientos, startGetTipoAsientos} = useTipoAsientosStore()

  useEffect(() => {
    startGetTipoAsientos()
  }, [])
  
  // TODO ================================================================================================================================================
  // TODO ================================================================================================================================================
  //TODO Ya termine de agregar la parte de asientos, ahora me falta corregir la parte de traer "Usuarios" (ya que este lo hice solo con Hooks y lo TENGO QUE HACERLO CON EL "store")
  // TODO ================================================================================================================================================
  // TODO ================================================================================================================================================

  

  const columns = [
    {name: 'Nombre'},
    {name: 'Descripcion'},
    {name: 'Editar', options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Button variant="outlined" onClick={openAsientosModal} startIcon={<EditIcon />}>
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

        {
          statusGetTipoAsientos === 'error'
          ? <span>{errorMessageGetTipoAsientos}</span>
          : (
            statusGetTipoAsientos === 'checking'
            ? (
              <>
                <CircularProgress />
                <span>Buscando Tipos de Asientos...</span>
              </>
            ) : (
              <MUIDataTable
                className='animate__animated animate__fadeIn'
                title={"Tipos de Asientos"}
                data={dataTipoAsientos}
                columns={columns}
                options={options} 
              />
            )
          )
          
        }

        
      </div>

      <AsientosModal />
    </>
  )
}
