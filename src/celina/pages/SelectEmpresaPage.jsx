import { NavbarInicioPage } from "../../ui"
import ShortcutIcon from '@mui/icons-material/Shortcut';
import { Link } from "react-router-dom";


export const SelectEmpresaPage = () => {
  return (
    <>
     <NavbarInicioPage />

     <div className="container">
      <h1 className="mt-5">Seleccione su empresa</h1>
      <hr />
     </div>

     <div className="container text-center">
      
      <div className="row mt-5">

        <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
          <div className="card card-styles" >
            <div className="card-body">
              <h5 className="card-title title-empresa">AppTeck</h5>
              <Link to='/inicio' className="btn btn-primary mt-3 btn-ingresar">
                Ingresar
                <ShortcutIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
          <div className="card card-styles" >
            <div className="card-body">
              <h5 className="card-title title-empresa">AppTeck</h5>
              <Link to='/inicio' className="btn btn-primary mt-3 btn-ingresar">
                Ingresar
                <ShortcutIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
          <div className="card card-styles" >
            <div className="card-body">
              <h5 className="card-title title-empresa">AppTeck</h5>
              <Link to='/inicio' className="btn btn-primary mt-3 btn-ingresar">
                Ingresar
                <ShortcutIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
          <div className="card card-styles" >
            <div className="card-body">
              <h5 className="card-title title-empresa">AppTeck</h5>
              <Link to='/inicio' className="btn btn-primary mt-3 btn-ingresar">
                Ingresar
                <ShortcutIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
          <div className="card card-styles" >
            <div className="card-body">
              <h5 className="card-title title-empresa">AppTeck</h5>
              <Link to='/inicio' className="btn btn-primary mt-3 btn-ingresar">
                Ingresar
                <ShortcutIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
          <div className="card card-styles" >
            <div className="card-body">
              <h5 className="card-title title-empresa">AppTeck</h5>
              <Link to='/inicio' className="btn btn-primary mt-3 btn-ingresar">
                Ingresar
                <ShortcutIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
          <div className="card card-styles" >
            <div className="card-body">
              <h5 className="card-title title-empresa">AppTeck</h5>
              <Link to='/inicio' className="btn btn-primary mt-3 btn-ingresar">
                Ingresar
                <ShortcutIcon />
              </Link>
            </div>
          </div>
        </div>

      </div>

    </div>
     
    </>
  )
}
