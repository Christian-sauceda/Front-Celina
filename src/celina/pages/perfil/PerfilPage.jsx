import { Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material"


export const PerfilPage = () => {
  return (
    <>
    <div className="container mt-5">
      <h2>Datos del Usuario: Lucas</h2>
      <hr />
      <form>
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


          </Grid>

        </Grid>
      </form>
    </div>
    </>
  )
}
