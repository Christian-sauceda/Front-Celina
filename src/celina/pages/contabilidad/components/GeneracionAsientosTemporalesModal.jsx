
import FolderIcon from '@mui/icons-material/Folder';

// Import Modal
import Modal from "react-modal"

// Custom Hooks
import { useUiStoreGeneracionAsientos } from "../../../../hooks";

import './stylesModalGeneracionAsientos.css'

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

  // TODO me quede por terminar el Modal de Generar "Asientos Temporales" y tambien me faltan el de "Asientos Mayorizados"

  return (
    <Modal
      isOpen={isGeneracionAsientosTemporalesModalOpen}
      onRequestClose={closeGeneracionAsientosTemporalesModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      {/* Header */}
      <div className='d-flex align-items-middle justify-content-center py-4'>
        <FolderIcon fontSize='large' className='me-2' />
        <h2>Asientos Temporales</h2>
      </div>
    </Modal>
  )

}
