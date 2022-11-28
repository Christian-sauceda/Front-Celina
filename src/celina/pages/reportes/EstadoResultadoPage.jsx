import { Button, Grid, InputLabel, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel  } from '@mui/lab';

import { Box } from '@mui/system';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import AssessmentIcon from '@mui/icons-material/Assessment';
import SummarizeIcon from '@mui/icons-material/Summarize';

// Components
import { ItemReporteDetalladoEstadoResultado, ItemReporteGrupalEstadoResultado } from './components';


// DatePicker
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import { useState } from 'react';
registerLocale('es', es)


export const EstadoResultadoPage = () => {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <h1>Estado de Resultados</h1>
        <hr />

        <div className='mt-3 border p-2'>
          <h5>Estado de Resultados</h5>
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

        <TabContext value={value}>
          <Box className='d-flex justify-content-centers' sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example" variant='scrollable' scrollButtons='auto' >
              <Tab label="Reporte Grupal" value="1" iconPosition='start' icon={<AssessmentIcon /> }/>
              <Tab label="Reporte Detallado" value="2" iconPosition='start' icon={<SummarizeIcon />} />
            </TabList>
          </Box>

          <TabPanel value='1'>
            <ItemReporteGrupalEstadoResultado />
          </TabPanel>

          <TabPanel value="2">
            <ItemReporteDetalladoEstadoResultado />
          </TabPanel>

        </TabContext>

        {/* Fin Tabs */}

        

      </div>
    </>
  )
}
