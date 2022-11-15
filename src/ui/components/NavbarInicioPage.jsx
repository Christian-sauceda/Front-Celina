
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

import './stylesNavbar.css'

export const NavbarInicioPage = () => {

  // TODO Por aca me quede, tengo que crear un Navbar atractico con iconos de esa url y a ver que procede...
  // https://mui.com/material-ui/material-icons/

  return (
    <nav className="navbar navbar-expand-lg navbar-fondo">
      <div className="container-fluid d-flex">
        <a className="navbar-brand text-light ms-4" href="#">Bienvenido <strong>Lucas</strong></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav mr-auto">
            <a className="nav-link text-light d-flex align-items-center cerrar_sesion px-3 me-3" href="#">
              <PowerSettingsNewIcon 
                fontSize='small'
                className='me-1'
              />
              Cerrar Sesion
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
