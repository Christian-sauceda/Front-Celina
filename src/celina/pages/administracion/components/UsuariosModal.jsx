import { useState } from 'react';

import PersonIcon from '@mui/icons-material/Person';
import { Button, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';

// Import Modal
import Modal from "react-modal"
import './stylesModalUsuarios.css'

// Custom Hooks
import { useUiStoreUsuarios } from "../../../../hooks";

// Input Phones
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

// DatePicker
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale('es', es)


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

export const UsuariosModal = () => {
  const {isUsuariosModalOpen, closeUsuariosModal} = useUiStoreUsuarios()
  const [cellPhone, setCellPhone] = useState()
  const changePhone = (e) => {
    setCellPhone(e)
  }

  return (
    <Modal
        isOpen={isUsuariosModalOpen}
        onRequestClose={closeUsuariosModal}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
    >

      {/* Header */}
      <div className='d-flex align-items-middle justify-content-center py-4'>
        <PersonIcon fontSize='large' />
        <h2>Datos del Usuario</h2>
      </div>

      {/* Formulario */}
      <Box component="form" className="d-sm-flex mb-4">
        <Grid container>
          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel>ID ó Pasaporte</InputLabel>
              <TextField
                type='text' 
                placeholder='Ejemplo: 0801199017845' 
                fullWidth
                name='idpasaporte'
                variant='standard'
              />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel>Contraseña</InputLabel>
              <TextField
                type='password' 
                placeholder='Ejemplo: mypassword2022' 
                fullWidth
                name='password'
                variant='standard'
                // onChange={}
                // error={}              
                // helperText={}
              />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel>Primer Nombre</InputLabel>
              <TextField
                type='text' 
                placeholder='Ejemplo: John Doe' 
                fullWidth
                name='firstName'
                variant='standard'
                // onChange={}
                // error={}              
                // helperText={}
              />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel>Apellidos</InputLabel>
              <TextField
                type='text' 
                placeholder='Ejemplo: Saravia Delarca' 
                fullWidth
                name='firstName'
                variant='standard'
                // onChange={}
                // error={}              
                // helperText={}
              />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <InputLabel>Sexo</InputLabel>
            <Select
              id="demo-simple-select"
              defaultValue={'M'}
              // onChange={handleChange}
              variant='standard'
              fullWidth
            >
              <MenuItem value='M'>Masculino</MenuItem>
              <MenuItem value='F'>Femenino</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <InputLabel>Fecha de Nacimiento</InputLabel>
            <DatePicker 
              // minDate={formValue.start} // Para que NO me seleccione una fecha MENOR a la fecha de INICIO
              // selected={formValue.end}
              onChange={(event) => onDateChange(event, 'end')}
              className="form-control"
              dateFormat='Pp'
              locale='es'
              // selected={new Date().getDate()}
            />
          </Grid>
         
          <Grid item xs={12} sx={{mt: 2}}>
            <InputLabel>Tipo de Usuario</InputLabel>
            <Select
              id="demo-simple-select"
              defaultValue={2}
              variant='standard'
              // onChange={handleChange}
              fullWidth
            >
              <MenuItem value={1}>ADMINISTRADOR</MenuItem>
              <MenuItem value={2}>USUARIO</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <InputLabel>Estado</InputLabel>
            <Select
              id="demo-simple-select"
              defaultValue={1}
              variant='standard'
              // onChange={handleChange}
              fullWidth
            >
              <MenuItem value={1}>Prueba</MenuItem>
              <MenuItem value={2}>Atlantida</MenuItem>
              <MenuItem value={2}>Atlantida</MenuItem>
              <MenuItem value={2}>Atlantida</MenuItem>
              <MenuItem value={2}>Atlantida</MenuItem>
              <MenuItem value={2}>Atlantida</MenuItem>
              <MenuItem value={2}>Atlantida</MenuItem>
              <MenuItem value={2}>Atlantida</MenuItem>
              <MenuItem value={2}>Atlantida</MenuItem>
              <MenuItem value={2}>Atlantida</MenuItem>
            </Select>
          </Grid> 

          <Grid item xs={12} sx={{mt: 2}}>
            <InputLabel>Direccion</InputLabel>
              <TextField
                type='textarea' 
                placeholder='Ejemplo: Col. Celina, Tegucigalpa, Francisco Morazan' 
                fullWidth
                name='direccion'
                // onChange={}
                // error={}              
                // helperText={}
              />

            {/* <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Ingrese su direccion"
              style={{ width: 500 }}
            /> */}
          </Grid>

        </Grid>

        <Grid container className="ms-sm-5">
          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel>Nombre de Usuario</InputLabel>
              <TextField
                type='text' 
                placeholder='Ejemplo: John' 
                fullWidth
                name='username'
                variant='standard'

              />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel>Confirma tu Contraseña</InputLabel>
              <TextField
                type='password' 
                placeholder='Ejemplo: mypassword2022' 
                fullWidth
                name='password'
                variant='standard'
                // onChange={}
                // error={}              
                // helperText={}
              />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel>Segundo Nombre</InputLabel>
              <TextField
                type='text' 
                placeholder='Ejemplo: John Doe' 
                fullWidth
                name='lastName'
                variant='standard'
                // onChange={}
                // error={}              
                // helperText={}
              />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel>Email</InputLabel>
              <TextField
                type='email' 
                placeholder='Ejemplo: Saravia Delarca' 
                fullWidth
                name='email'
                variant='standard'
                // onChange={}
                // error={}              
                // helperText={}
              />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <InputLabel>Estado Civil</InputLabel>
            <Select
              id="demo-simple-select"
              defaultValue={'S'}
              variant='standard'
              // onChange={handleChange}
              fullWidth
            >
              <MenuItem value='S'>Soltero</MenuItem>
              <MenuItem value='C'>Casado</MenuItem>
              <MenuItem value='U'>Union Libre</MenuItem>
              <MenuItem value='V'>Viudo</MenuItem>
            </Select>
          </Grid>
        
          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel className="mb-2">Teléfono Móvil</InputLabel>
              <PhoneInput
                  className=' d-block w-100'
                  country={'hn'}
                  enableAreaCodes={true}
                  value={cellPhone}
                  onChange={changePhone}
              />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <InputLabel>Pais</InputLabel>
            <Select
              id="demo-simple-select"
              defaultValue={'HN'}
              // onChange={handleChange}
              variant='standard'
              fullWidth
              >
              <MenuItem value='HN'>Honduras</MenuItem>
              <MenuItem value='Es'>El Salvador</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <InputLabel>Ciudad</InputLabel>
            <Select
              id="demo-simple-select"
              defaultValue={1}
              variant='standard'
              // onChange={handleChange}
              fullWidth
            >
              <MenuItem value={1}>Prueba</MenuItem>
              <MenuItem value={2}>Atlantida</MenuItem>
              <MenuItem value={2}>Atlantida</MenuItem>
              <MenuItem value={2}>Atlantida</MenuItem>
              <MenuItem value={2}>Atlantida</MenuItem>
              <MenuItem value={2}>Atlantida</MenuItem>
              <MenuItem value={2}>Atlantida</MenuItem>
              <MenuItem value={2}>Atlantida</MenuItem>
              <MenuItem value={2}>Atlantida</MenuItem>
            </Select>
          </Grid>

        </Grid>
      </Box>

      <hr/>
      <div className="d-flex flex-column flex-sm-row justify-content-sm-end">
          <Button className="mb-2 mb-sm-0 me-sm-4" onClick={closeUsuariosModal} variant="contained" color='error' startIcon={<CloseIcon />}>
            Cerrar
          </Button>
          <Button variant="contained" startIcon={<SaveIcon />}>
            Guardar
          </Button>
      </div>
    
    </Modal>
  )
}
