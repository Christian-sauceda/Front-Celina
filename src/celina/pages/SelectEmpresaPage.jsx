import { NavbarInicioPage } from "../../ui"
import ShortcutIcon from '@mui/icons-material/Shortcut';
import { Link } from "react-router-dom";

import { Skeleton } from '@mui/material';
import { useState } from "react";

export const SelectEmpresaPage = () => {
  const [prueba, setPrueba] = useState(false)

  setTimeout(() => { //* Esto solo para simular que se estan consultando los datos y probar el Skeleton
    setPrueba(true)
  }, 3000);

  return (
    <>
     <NavbarInicioPage />

     <div className="container">
      <h1 className="mt-5">Seleccione su empresa</h1>
      <hr />
     </div>

     <div className="container text-center">
        
      {
        prueba ?
        (
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
        )
        :
        (
          <div className="row mt-5">
              <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
                <div className="card card-styles" >
                  <div className="card-body">
                  <Skeleton variant="rectangular" className="w-100" height={60}  />
                  <Skeleton variant="rounded" className="w-100 mt-2" height={60} />
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
                <div className="card card-styles" >
                  <div className="card-body">
                  <Skeleton variant="rectangular" className="w-100" height={60}  />
                  <Skeleton variant="rounded" className="w-100 mt-2" height={60} />
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
                <div className="card card-styles" >
                  <div className="card-body">
                  <Skeleton variant="rectangular" className="w-100" height={60}  />
                  <Skeleton variant="rounded" className="w-100 mt-2" height={60} />
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
                <div className="card card-styles" >
                  <div className="card-body">
                  <Skeleton variant="rectangular" className="w-100" height={60}  />
                  <Skeleton variant="rounded" className="w-100 mt-2" height={60} />
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
                <div className="card card-styles" >
                  <div className="card-body">
                  <Skeleton variant="rectangular" className="w-100" height={60}  />
                  <Skeleton variant="rounded" className="w-100 mt-2" height={60} />
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
                <div className="card card-styles" >
                  <div className="card-body">
                  <Skeleton variant="rectangular" className="w-100" height={60}  />
                  <Skeleton variant="rounded" className="w-100 mt-2" height={60} />
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
                <div className="card card-styles" >
                  <div className="card-body">
                  <Skeleton variant="rectangular" className="w-100" height={60}  />
                  <Skeleton variant="rounded" className="w-100 mt-2" height={60} />
                  </div>
                </div>
              </div>
          </div>
          
        )
      }

    

    </div>
     
    </>
  )
}
