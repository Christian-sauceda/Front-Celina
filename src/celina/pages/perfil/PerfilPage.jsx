import { Box, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useState } from "react";

// DatePicker
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale('es', es)

// Input Phones
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

export const PerfilPage = () => {
  const [cellPhone, setCellPhone] = useState()
  const changePhone = (e) => {
    // console.log('ACA >> ', e)
    // console.log('prueba >>> ', cellPhone)
    setCellPhone(e)
  }

  return (
    <>
    <div className="container mt-1 animate__animated animate__fadeIn">
      <h2>Datos del Usuario: Lucas</h2>
      <hr />
      <Box component="form" className="d-sm-flex mb-4">
        <Grid container>
          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel>ID ó Pasaporte</InputLabel>
              <TextField
                type='text' 
                placeholder='Ejemplo: 0801199017845' 
                fullWidth
                name='idpasaporte'
              />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel>Contraseña</InputLabel>
              <TextField
                type='password' 
                placeholder='Ejemplo: mypassword2022' 
                fullWidth
                name='password'
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
              />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
              <InputLabel>Confirma tu Contraseña</InputLabel>
              <TextField
                type='password' 
                placeholder='Ejemplo: mypassword2022' 
                fullWidth
                name='password'
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
                  country={'us'}
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
    </div>
    </>
  )
}
