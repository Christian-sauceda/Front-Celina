import { NavbarInicioPage } from "../../ui"
import ShortcutIcon from '@mui/icons-material/Shortcut';
import { Link } from "react-router-dom";

import { Button, Skeleton } from '@mui/material';
import { useState } from "react";
import { useDispatch } from "react-redux";

// Slices
import { onSelectEmpresa } from "../../store";

// Custom Hooks
import { useEmpresasStore } from "../../hooks";
import { useEffect } from "react";


export const SelectEmpresaPage = () => {
  const [prueba, setPrueba] = useState(false)
  const dispatch = useDispatch()
  const {empresasPorUserLogged, startGetEmpresasPorCodUserLogeado} = useEmpresasStore()

  const selectEmpresa = (nombre, idEmpresa) => { // TODO Sustituir todos los "LINK" por "Buttons" para que solo se redirija en caso de seleccionar una empresa... Lo hara directamente con el "hook" que luego creare, ya que automaticamente eliminara la ruta de "empresas-init" y por lo tanto la enviara directamente a la ruta "inicio" con la empresa seleccionada
    dispatch(onSelectEmpresa({
      nombre,
      idEmpresa
    }))
  }

  setTimeout(() => { //* Esto solo para simular que se estan consultando los datos y probar el Skeleton
    setPrueba(true)
  }, 100);

  useEffect(() => {
    startGetEmpresasPorCodUserLogeado()
  }, [])
  // TODO ===========================================================================================
  // TODO ===========================================================================================
  // TODO ===========================================================================================
  // TODO ===========================================================================================
  // TODO ME QUEDE POR ACA OCUPO CARGAR LA CANTIDAD DE EMPRESAS DEL USUARIO LOGEADO
  // TODO ===========================================================================================
  // TODO ===========================================================================================
  // TODO ===========================================================================================


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
                  <h5 className="card-title title-empresa">Lucas</h5>
                  <button onClick={() => selectEmpresa('lucas', 123)} className="btn btn-primary mt-3 btn-ingresar">
                    Ingresar
                    <ShortcutIcon />
                  </button>
                </div>
              </div>
            </div>
    
            <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
              <div className="card card-styles" >
                <div className="card-body">
                  <h5 className="card-title title-empresa">AppTeck</h5>
                  <button onClick={() => selectEmpresa('appteck', 3)} className="btn btn-primary mt-3 btn-ingresar">
                    Ingresar
                    <ShortcutIcon />
                  </button>
                </div>
              </div>
            </div>
    
            <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
              <div className="card card-styles" >
                <div className="card-body">
                  <h5 className="card-title title-empresa">Darknet</h5>
                  <button onClick={() => selectEmpresa('darknet', 333)} className="btn btn-primary mt-3 btn-ingresar">
                    Ingresar
                    <ShortcutIcon />
                  </button>
                </div>
              </div>
            </div>
    
            <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
              <div className="card card-styles" >
                <div className="card-body">
                  <h5 className="card-title title-empresa">Kings</h5>
                  <button onClick={() => selectEmpresa('kings', 121)} className="btn btn-primary mt-3 btn-ingresar">
                    Ingresar
                    <ShortcutIcon />
                  </button>
                </div>
              </div>
            </div>
    
            <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
              <div className="card card-styles" >
                <div className="card-body">
                  <h5 className="card-title title-empresa">StevenKing</h5>
                  <button onClick={() => selectEmpresa('StevenKing', 551)} className="btn btn-primary mt-3 btn-ingresar">
                    Ingresar
                    <ShortcutIcon />
                  </button>
                </div>
              </div>
            </div>
    
            <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
              <div className="card card-styles" >
                <div className="card-body">
                  <h5 className="card-title title-empresa">Sufjan</h5>
                  <button onClick={() => selectEmpresa('Sufjan', 552)} className="btn btn-primary mt-3 btn-ingresar">
                    Ingresar
                    <ShortcutIcon />
                  </button>
                </div>
              </div>
            </div>
    
            <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn">
              <div className="card card-styles" >
                <div className="card-body">
                  <h5 className="card-title title-empresa">KickBoxing</h5>
                  <button onClick={() => selectEmpresa('KickBoxing', 844)} className="btn btn-primary mt-3 btn-ingresar">
                    Ingresar
                    <ShortcutIcon />
                  </button>
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
