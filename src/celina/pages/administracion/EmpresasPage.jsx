
import MUIDataTable from "mui-datatables"
import Button from '@mui/material/Button';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect } from "react";


//? DATA MOMENTANEA (LUEGO LA BORRARE)
import { dataEmpresas } from "../../../assets/dataEmpresas";
import { EmpresasModal } from "./";

// Custom Hooks
import { useEmpresasStore, useUiStoreEmpresas } from "../../../hooks";

export const EmpresasPage = () => {
  const {openEmpresasModal} = useUiStoreEmpresas() // Hook para Abrir Modal de Empresas
  const {startTablaGetEmpresasPorCodUserLogeado} = useEmpresasStore() //* Para traer las empresas de ese usuario con un formato en espesifico
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

  return ( //! Aqui no ocupo poner "spinner", cargas o ese tipo de cosas ya que la informacion se consulto desde que el usuario se logeo y esta en memoria
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
          data={startTablaGetEmpresasPorCodUserLogeado()}
          columns={columns}
          options={options} 
        />
      </div>

      <EmpresasModal />
    </>
  )
}
