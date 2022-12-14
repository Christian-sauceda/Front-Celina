import { useEffect, useState } from 'react';

import ComputerIcon from '@mui/icons-material/Computer';
import { Button, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';

// Import Modal
import Modal from "react-modal"
import './stylesModalUsuarios.css'

// Custom Hooks
import { useEmpresasStore, useUiStoreEmpresas } from "../../../../hooks";

// Input Phones
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

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


export const EmpresasModal = () => {
    const {isEmpresasModalOpen, closeEmpresasModal} = useUiStoreEmpresas()
    const {startGetEstadosPorPais} = useEmpresasStore()
    const cellPhone = 'qwe' //TODO Borrar esta data


    const [formValue, setFormValue] = useState({
      NOMBRE: '',
      RTN: '',
      WEB: '',
      USEREMAIL: '',
      SERVEREMAIL: '',
      COD_CITY: 1,
      ADDRESS_WORK: '',
      NUM_AREAOFF: '',
      NUM_AREACEL: '',
      NUM_OFFPHONE: '',
      NUM_CELPHONE: '',

    })

    const onInputChange = ({target}) => {
      setFormValue({
        ...formValue,
        [target.name]: target.value
      })
      console.log('Form value >> ', formValue)
    }

    useEffect(() => {
      startGetEstadosPorPais()
    }, [])
    

  return (

    <Modal
        isOpen={isEmpresasModalOpen}
        onRequestClose={closeEmpresasModal}
        style={customStyles}
        className="modal modal-empresas-height"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
    >
        {/* Header */}
      <div className='d-flex align-items-middle justify-content-center py-4'>
        <ComputerIcon fontSize='large' className='me-1' />
        <h2>Datos de la Empresa</h2>
      </div>


        {/* Formulario */}
      <Box component="form" className="d-sm-flex mb-4">
        <Grid container>
          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel>Nombre de la Empresa</InputLabel>
              <TextField
                type='text' 
                placeholder='Ejemplo: Appteck' 
                fullWidth
                name='NOMBRE'
                onChange={onInputChange}
                variant='standard'
                value={formValue.NOMBRE}
              />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel>Sitio Web</InputLabel>
              <TextField
                type='text' 
                placeholder='Ejemplo: John Doe' 
                fullWidth
                name='WEB'
                variant='standard'
                onChange={onInputChange}
                value={formValue.WEB}
                // onChange={}
                // error={}              
                // helperText={}
              />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel className="mb-2">Tel??fono M??vil</InputLabel>
              <PhoneInput
                  className=' d-block w-100'
                  country={'hn'}
                  enableAreaCodes={true}
                  // onChange={onInputChange}
                  value={cellPhone}
              />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <InputLabel>Pais</InputLabel>
            <Select
              id="demo-simple-select"
              defaultValue={1}
              variant='standard'
              onChange={onInputChange}
              // onChange={handleChange}
              fullWidth
            >
              <MenuItem value='1'>Honduras</MenuItem>
              <MenuItem value='2'>El Salvador</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <InputLabel>Ciudad</InputLabel>
            <Select
              id="demo-simple-select"
              variant='standard'
              onChange={onInputChange}
              value={formValue.COD_CITY}
              // onChange={handleChange}
              fullWidth
            >
              <MenuItem value='1'>Atlantida</MenuItem>
              <MenuItem value='2'>Olancho</MenuItem>
              <MenuItem value='2'>Olancho</MenuItem>
              <MenuItem value='2'>Olancho</MenuItem>
              <MenuItem value='2'>Olancho</MenuItem>
              <MenuItem value='2'>Olancho</MenuItem>
              <MenuItem value='2'>Olancho</MenuItem>
              <MenuItem value='2'>Olancho</MenuItem>
              <MenuItem value='2'>Olancho</MenuItem>
            </Select>
          </Grid>

        </Grid>

        <Grid container className="ms-sm-5">
          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel>RTN</InputLabel>
              <TextField
                type='text' 
                placeholder='Ejemplo: 1975462301234' 
                fullWidth
                name='RTN'
                variant='standard'
                onChange={onInputChange}
                value={formValue.RTN}
              />
          </Grid>
          
          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel>Email</InputLabel>
              <TextField
                type='email' 
                placeholder='Ejemplo: myemail@gmail.com' 
                fullWidth
                name='email'
                variant='standard'
                onChange={onInputChange}
                // onChange={}
                // error={}              
                // helperText={}
              />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel className="mb-2">Celular</InputLabel>
              <PhoneInput
                  className=' d-block w-100'
                  country={'hn'}
                  enableAreaCodes={true}
                  value={cellPhone}
                  // onChange={onInputChange}
              />
          </Grid>
          
          <Grid item xs={12} sx={{mt: 2}}>
            <InputLabel>Estado</InputLabel>
            <Select
              id="demo-simple-select"
              defaultValue={1}
              // onChange={handleChange}
              variant='standard'
              onChange={onInputChange}
              fullWidth
              >
              <MenuItem value='1'>Francisco Morazan</MenuItem>
              <MenuItem value='2'>Yoro</MenuItem>
              <MenuItem value='2'>Yoro</MenuItem>
              <MenuItem value='2'>Yoro</MenuItem>
              <MenuItem value='2'>Yoro</MenuItem>
              <MenuItem value='2'>Yoro</MenuItem>
              <MenuItem value='2'>Yoro</MenuItem>
              <MenuItem value='2'>Yoro</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <InputLabel>Direccion</InputLabel>
              <TextField
                type='textarea' 
                placeholder='Ejemplo: Col. Celina, Tegucigalpa, Francisco Morazan' 
                fullWidth
                name='direccion'
                onChange={onInputChange}
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
      </Box>

      <hr/>
      <div className="d-flex flex-column flex-sm-row justify-content-sm-end">
          <Button className="mb-2 mb-sm-0 me-sm-4" onClick={closeEmpresasModal} variant="contained" color='error' startIcon={<CloseIcon />}>
            Cerrar
          </Button>
          <Button variant="contained" startIcon={<SaveIcon />}>
            Guardar
          </Button>
      </div>


    </Modal>
  )
}
