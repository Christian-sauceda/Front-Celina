
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Button } from '@mui/material';

import './stylesNavbar.css'

import { useDispatch } from 'react-redux';

// Custom Hooks
import { useAuthStore } from '../../hooks';

export const NavbarInicioPage = () => {
  const {user, startLogout} = useAuthStore()

  const closeSession = () => {
    startLogout(null)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-fondo">
      <div className="container-fluid d-flex">
        <a className="navbar-brand text-light ms-4" href="#">Bienvenido <strong>{user.userAuth}</strong></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav mr-auto">
            <Button className="text-light d-flex align-items-center cerrar_sesion px-3 me-3" onClick={closeSession}>
              <PowerSettingsNewIcon 
                fontSize='small'
                className='me-1'
              />
              Cerrar Sesion
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
