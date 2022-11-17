
import MUIDataTable from "mui-datatables"
import Button from '@mui/material/Button';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

//? DATA MOMENTANEA (LUEGO LA BORRARE)
import {dataUsuarios} from '../../../assets/dataUsuarios'

export const UsuariosPage = () => {
  const columns = ["ID de Usuario", "Primer Nombre", "Segundo Nombre", "Apellidos", "Email", "Sexo", "Estado Civil", "Edad", "Telefono Movil"];

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
          title={"Usuarios"}
          data={dataUsuarios}
          columns={columns}
          options={options} 
        />
      </div>
    </>
  )
}


