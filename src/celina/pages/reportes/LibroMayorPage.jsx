import { Button, Grid, InputLabel, TextField } from '@mui/material';

import { Box } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

// Components
import { ItemReporteLibroMayor } from './components';

// DatePicker
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale('es', es)

export const LibroMayorPage = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <h1>Libro Mayor</h1>
        <hr />

        <div className='mt-3 border p-2'>
          <h5>Cuenta</h5>
          <Box component="form" className="d-sm-flex mb-4">
              <Grid container>
                <Grid item xs={12} sx={{mt: 2}}>
                  <InputLabel>Desde</InputLabel>
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

                <Grid item xs={12} sx={{mt: 4}}>
                  <InputLabel>Cuenta</InputLabel>
                  <TextField 
                    type='text'
                    name='searchCuenta'
                    variant='standard'
                    fullWidth
                    // startAdornmen
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                
              </Grid>

              <Grid container className="ms-sm-5">
                <Grid item xs={12} sx={{mt: 2}}>
                    <InputLabel>Hasta</InputLabel>
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

                <div className="d-flex justify-content-evenly flex-column flex-sm-row w-100 mt-3 ">
                  <Button className='mb-2 mb-sm-0 px-5' variant="contained">
                    <ExpandMoreIcon fontSize='large' />
                    Agregar
                  </Button>
                  <Button className='px-5' variant="contained">
                    <DeleteForeverIcon fontSize='large'/>
                    Limpiar
                  </Button>
                </div>
              </Grid>
          </Box>
        </div>


        {/* Inicio Tabs */}
        <ItemReporteLibroMayor />
        {/* Fin Tabs */}

      </div>
    </>
  )
}
