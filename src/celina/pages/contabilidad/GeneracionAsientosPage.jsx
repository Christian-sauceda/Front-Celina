import NoteAddIcon from '@mui/icons-material/NoteAdd';
import FolderIcon from '@mui/icons-material/Folder';
import BookIcon from '@mui/icons-material/Book';
import CalculateIcon from '@mui/icons-material/Calculate';

import { Button, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { Box } from '@mui/system';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import SaveIcon from '@mui/icons-material/Save';

// Custom Hooks
import { useUiStoreGeneracionAsientos } from '../../../hooks';

// Components
import { GeneracionAsientosTemporalesModal, GeneracionAsientosMayorizadosModal } from './';

// DatePicker
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
registerLocale('es', es)

export const GeneracionAsientosPage = () => {

  

  const {openGeneracionAsientosTemporalesModal, openGeneracionAsientosMayorizadosModal} = useUiStoreGeneracionAsientos()

  return (
    <>
      <div className="container-fluid mt-4">
        <h1>Generación de Asientos</h1>
        <div className='d-flex  flex-column flex-sm-row justify-content-end px-4 w-100'>
            <Button 
              className="d-flex flex-column m-1" 
              variant="outlined" 
              sx={{
                padding: '1rem'
              }}
              // startIcon={<NoteAddIcon fontSize='large' />}
            >
              <NoteAddIcon />
              Nuevo
            </Button>

            <Button 
              className="d-flex flex-column m-1" 
              variant="outlined" 
              // startIcon={<FolderIcon fontSize='large' />}
              onClick={openGeneracionAsientosTemporalesModal}
            >
              <FolderIcon />
              Abrir AT
            </Button>

            <Button 
              className="d-flex flex-column m-1" 
              variant="outlined" 
              // startIcon={<BookIcon fontSize='large' />}
              onClick={openGeneracionAsientosMayorizadosModal}
            >
              <BookIcon />
              Abrir AM
            </Button>

            <Button 
              className="d-flex flex-column m-1" 
              variant="outlined" 
              // startIcon={<CalculateIcon fontSize='large' />}
            >
              <CalculateIcon />
              Mayorizar
            </Button>
        </div>

        {/* Inicio Primer Form */}
        <div className='mt-3 border p-2'>
          <div className='d-flex justify-content-between align-items-center'>
            <h5>Datos Generales</h5>
            <div className='d-flex'>
              <Button>
                <SaveIcon />
                Guardar Cambios
              </Button>
              <Button variant="text" data-bs-toggle="collapse" data-bs-target="#collapseDatosGenerales" aria-expanded="true" aria-controls="collapseDatosGenerales" >
                <ExpandMoreIcon fontSize='large' className='p-0' />
              </Button>
            </div>
          </div>

          <div className="collapse show" id="collapseDatosGenerales">
            <Box component="form" className="d-sm-flex mb-4">
              <Grid container>

                <Grid item xs={12} sx={{mt: 2}}>
                  <InputLabel>Fecha</InputLabel>
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
                  <InputLabel>Tipo</InputLabel>
                  <Select
                    id="demo-simple-select"
                    defaultValue={2}
                    // variant='standard'
                    // onChange={handleChange}
                    fullWidth
                  >
                    <MenuItem value={1}>CHEQUE</MenuItem>
                    <MenuItem value={2}>FACTURAS</MenuItem>
                    <MenuItem value={2}>RECIBOS</MenuItem>
                    <MenuItem value={2}>OTROS</MenuItem>
                  </Select>
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
                    <InputLabel>No. de Documento</InputLabel>
                    <TextField
                      type='number' 
                      placeholder='0' 
                      fullWidth
                      name='numeroDocumento'
                      variant='standard'
                    />
                </Grid>

                <Grid item xs={12} sx={{mt: 2}}>
                    <InputLabel>Detalle</InputLabel>
                    <TextField
                      type='textarea' 
                      placeholder='Escriba algun detalle...' 
                      fullWidth
                      name='direccion'
                      // onChange={}
                      // error={}              
                      // helperText={}
                    />
                </Grid>

                <div className='d-flex w-100 justify-content-between'>
                  <Grid item xs={12} sx={{m: 2}}>
                      <InputLabel>Monto</InputLabel>
                      <TextField
                        type='number' 
                        fullWidth
                        name='monto'
                        // variant='standard'
                      />
                  </Grid>
                  
                  <Grid item xs={12} sx={{m: 2}}>
                      <InputLabel>Tipo</InputLabel>
                      <Select
                        id="demo-simple-select"
                        defaultValue={'D'}
                        // variant='standard'
                        // onChange={handleChange}
                        fullWidth
                      >
                        <MenuItem value='D'>Deudor</MenuItem>
                        <MenuItem value='A'>Acreedor</MenuItem>
                      </Select>
                  </Grid>
                </div>

                <div className="d-flex justify-content-evenly flex-column flex-sm-row w-100 bg-dsark ">
                  <Button className='mb-2 mb-sm-0' variant="contained">
                    <ExpandMoreIcon fontSize='large' />
                    Agregar
                  </Button>
                  <Button variant="contained">
                    <DeleteForeverIcon fontSize='large'/>
                    Limpiar
                  </Button>
                </div>
              

              </Grid>
            </Box>
          </div>
        </div>
        {/* Fin Primer Form */}


        {/* Inicio Tabla */}
        <div className='mt-3 border p-2'>
          <div className='d-flex justify-content-between align-items-center'>
            <h5>Cuentas Agregadas</h5>
            <Button variant="text" data-bs-toggle="collapse" data-bs-target="#collapseCuentasAgregadas" aria-expanded="true" aria-controls="collapseCuentasAgregadas" >
              <ExpandMoreIcon fontSize='large' className='p-0' />
            </Button>
          </div>

          <div className="collapse show" id="collapseCuentasAgregadas">
            <table className='table'>
              <thead>
                <tr>
                  <th scope="col">Cuenta</th>
                  <th scope="col">Debe</th>
                  <th scope="col">Haber</th>
                  <th scope="col">Accion</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">616161 COMBUSTIBLE/GAS LPG	</th>
                  <td>12.11	</td>
                  <td>20</td>
                  <td>
                    <Button variant="contained" color='error'>
                      <DeleteIcon />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">616161 COMBUSTIBLE/GAS LPG	</th>
                  <td>12.11	</td>
                  <td>20</td>
                  <td>
                    <Button variant="contained" color='error'>
                      <DeleteIcon />
                    </Button>
                  </td>
                </tr>

                <tr>
                  <th scope="row">616161 COMBUSTIBLE/GAS LPG	</th>
                  <td>12.11	</td>
                  <td>20</td>
                  <td>
                    <Button variant="contained" color='error'>
                      <DeleteIcon />
                    </Button>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>
          
        </div>
        {/* Fin Tabla */}


        {/* Debe, Haber, Diferencia */}
        <div className='d-flex justify-content-between flex-column flex-sm-row mt-3 border p-2 mb-5'>
          <Grid item xs={12} sx={{mt: 4}}>
            <TextField 
              type='number'
              name='totalDebe'
              className='w-100'
              defaultValue={45}
              disabled

              // startAdornmen
              InputProps={{
                startAdornment: (
                  <InputAdornment className='text-dark' position="start">
                    Debe
                    <ExpandLessIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sx={{mt: 4}}>
            <TextField 
              type='number'
              name='totalHaber'
              className='w-100'
              defaultValue={0}
              disabled

              // data-decimal= "."
              // data-thousands= ","
              
              // startAdornmen
              InputProps={{
                startAdornment: (
                  <InputAdornment className='text-dark' position="start">
                    Haber
                    <ExpandMoreIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sx={{mt: 4}}>
            <TextField 
              type='text'
              name='totalDiferencia'
              className='w-100'
              // color='error'
              defaultValue={0}
              disabled
              
              // startAdornmen
              InputProps={{
                startAdornment: (
                  <InputAdornment className='text-dark' position="start">
                    Diferencia
                    <UnfoldLessIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </div>
      </div>

      {/* Modal de Asientos Temporales */}
      <GeneracionAsientosTemporalesModal />
      {/* Modal de Asientos Temporales */}
      <GeneracionAsientosMayorizadosModal />

    </>
  )
}
