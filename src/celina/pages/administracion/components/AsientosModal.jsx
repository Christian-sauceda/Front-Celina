
import CalculateIcon from '@mui/icons-material/Calculate';
import { Box, Button, Grid, InputLabel, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';

// Import Modal
import Modal from "react-modal"
import { useUiStoreAsientos } from '../../../../hooks';
import './stylesModalUsuarios.css'

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


export const AsientosModal = () => {
  const {isAsientosModalOpen, closeAsientosModal} = useUiStoreAsientos()

  return (
    <Modal
        isOpen={isAsientosModalOpen}
        onRequestClose={closeAsientosModal}
        style={customStyles}
        className="modal modal-asientos-height"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
    >

        {/* Header */}
      <div className='d-flex align-items-middle justify-content-center py-4'>
        <CalculateIcon fontSize='large' className='me-1' />
        <h2>Tipos de Asientos</h2>
      </div>


      {/* Formulario */}
      <Box component="form" className="d-sm-flex mb-4">
            <Grid container>
              <Grid item xs={12} sx={{mt: 2}}>
                  <InputLabel>Nombre</InputLabel>
                  <TextField
                    type='text' 
                    placeholder='Ejemplo: CHEQUE' 
                    fullWidth
                    name='nombreTipoAsiento'
                    variant='standard'
                  />
              </Grid>

              <Grid item xs={12} sx={{mt: 2}}>
                  <InputLabel>Descripcion</InputLabel>
                  <TextField
                    type='text' 
                    placeholder='Ejemplo: CHEQUE sirve para...' 
                    fullWidth
                    name='firstName'
                    variant='standard'
                    // onChange={}
                    // error={}              
                    // helperText={}
                  />
              </Grid>
            </Grid>
      </Box>

      <hr/>
      <div className="d-flex flex-column flex-sm-row justify-content-sm-end">
          <Button className="mb-2 mb-sm-0 me-sm-4" onClick={closeAsientosModal} variant="contained" color='error' startIcon={<CloseIcon />}>
            Cerrar
          </Button>
          <Button variant="contained" startIcon={<SaveIcon />}>
            Guardar
          </Button>
      </div>

    </Modal>

  )
}
