
import BookIcon from '@mui/icons-material/Book';

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

export const GeneracionAsientosMayorizadosModal = () => {
  const {isGeneracionAsientosMayorizadosModalOpen, closeGeneracionAsientosMayorizadosModal} = useUiStoreGeneracionAsientos()

  // TODO me quede por terminar el Modal de Generar "Asientos Temporales" y tambien me faltan el de "Asientos Mayorizados"

  return (
    <Modal
      isOpen={isGeneracionAsientosMayorizadosModalOpen}
      onRequestClose={closeGeneracionAsientosMayorizadosModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      {/* Header */}
      <div className='d-flex align-items-middle justify-content-center py-4'>
        <BookIcon fontSize='large' className='me-2' />
        <h2>Asientos Mayorizados</h2>
      </div>
    </Modal>
  )

}
