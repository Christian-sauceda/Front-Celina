import { Box, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"

// DatePicker
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale('es', es)

export const PerfilPage = () => {
  return (
    <>
    <div className="container mt-5">
      <h2>Datos del Usuario: Lucas</h2>
      <hr />
      <Box component="form">
        <Grid container>
          <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label='ID ó Pasaporte' 
                type='text' 
                placeholder='Ejemplo: 0801199017845' 
                fullWidth
                name='idpasaporte'
              />
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
              <TextField
                label='Contraseña' 
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
              <TextField
                label='Primer Nombre' 
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
              <TextField
                label='Apellidos' 
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
            <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              placeholder='Ejemplo: Saravia Delarca' 
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
            />
          </Grid>
         
          <Grid item xs={12} sx={{mt: 2}}>
            <InputLabel>Tipo de Usuario</InputLabel>
            <Select
              id="demo-simple-select"
              placeholder='Ejemplo: Saravia Delarca' 
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
              placeholder='Ejemplo: Saravia Delarca' 
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
            {/* <InputLabel>Direccion</InputLabel> */}
              <TextField
                label='Direccion' 
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
      </Box>
    </div>
    </>
  )
}
