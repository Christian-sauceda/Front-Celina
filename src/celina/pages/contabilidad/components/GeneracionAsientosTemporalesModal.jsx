
import MUIDataTable from "mui-datatables"

import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

// Import Modal
import Modal from "react-modal"

// Custom Hooks
import { useUiStoreGeneracionAsientos } from "../../../../hooks";

import './stylesModalGeneracionAsientos.css'
import { Button } from "@mui/material";
import { dataGeneracionAsientosTemp } from "../../../../assets/dataGeneracionAsientosTemp";

// Components
import { TableDetalle } from "./TableDetalle";

//* Configuraciones del Modal
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)', 
    },
};
Modal.setAppElement('#root'); // Ese "root" es el "id=root" del "index.html" de React

export const GeneracionAsientosTemporalesModal = () => {
  const {isGeneracionAsientosTemporalesModalOpen, closeGeneracionAsientosTemporalesModal} = useUiStoreGeneracionAsientos()
  
  const columns = [
    {name: 'Asiento'},
    {name: 'Fecha'},
    {name: 'Detalle'},
    {name: 'Tipo'},
    {name: 'Usuarios'},
    {name: 'Accion', options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <Button variant="outlined" startIcon={<AddIcon />}>
            Agregar
          </Button>
        )
      }
    }},
    {name: 'Vista Previa', options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return (
          <>
            <Button className="mb-2" fullWidth variant="outlined" onClick={() => console.log('META >> ', tableMeta.rowData)}  data-bs-toggle="collapse" data-bs-target={`#id${tableMeta.rowData[0]}`} aria-expanded="false" aria-controls={`#id${tableMeta.rowData[0]}`}>
              <ExpandMoreIcon />
            </Button>
            <TableDetalle id_elemento={`id${tableMeta.rowData[0]}`} />
          </>
        )
      }
    }},
    // {name: '', options: {
    //   customBodyRender: (value, tableMeta, updateValue) => {
    //     return (
    //         <TableDetalle id_elemento={`id${tableMeta.rowData[0]}`} />
    //     )
    //   }
    // }}
  ]

  const options = {
    filterType: 'dropdown',
    responsive: 'standard',
  };

  return (
    <Modal
      isOpen={isGeneracionAsientosTemporalesModalOpen}
      onRequestClose={closeGeneracionAsientosTemporalesModal}
      style={customStyles}
      className="modal modal-generacion-asientos-temporales-modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      {/* Header */}
      <div className='d-flex align-items-middle justify-content-center py-4'>
        <FolderIcon fontSize='large' className='me-2' />
        <h2>Asientos Temporales</h2>
      </div>

      <MUIDataTable
        className='animate__animated animate__fadeIn'
        title={"Usuarios"}
        data={dataGeneracionAsientosTemp}
        columns={columns}
        options={options}
      />
    </Modal>
  )

}
