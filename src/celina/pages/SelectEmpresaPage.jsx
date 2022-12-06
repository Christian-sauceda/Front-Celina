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

// Helpers
import { cortarNombreEmpresa } from "../../helpers/cortarNombreEmpresa"; // Helper para evitar romper disenio con nombre de empresa muy largo (por si se llega a dar el caso)... Devolvera un string pero con "..." al final

export const SelectEmpresaPage = () => {
  const dispatch = useDispatch()
  const {dataEmpresas, statusGetEmpresas, errorMessageGetEmpresas, startGetEmpresasPorCodUserLogeado} = useEmpresasStore()

  const selectEmpresa = (nombre, idEmpresa) => { // TODO Sustituir todos los "LINK" por "Buttons" para que solo se redirija en caso de seleccionar una empresa... Lo hara directamente con el "hook" que luego creare, ya que automaticamente eliminara la ruta de "empresas-init" y por lo tanto la enviara directamente a la ruta "inicio" con la empresa seleccionada
    dispatch(onSelectEmpresa({
      nombre,
      idEmpresa
    }))
  }

  useEffect(() => {
    startGetEmpresasPorCodUserLogeado()
  }, [])

  return (
    <>
     <NavbarInicioPage />

     <div className="container">
      <h1 className="mt-5">Seleccione su empresa</h1>
      <hr />
     </div>

     <div className="container text-center">
        
      {
        statusGetEmpresas === 'error'
        ? <span>{errorMessageGetEmpresas}</span>
        : (
          statusGetEmpresas === 'checking' // En caso de que aun siga buscando las empresas
          ? (
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
          ):( // En caso de que salga todo bien y encuentre empresas
            <div className="row mt-5">
              {
                dataEmpresas.map(e => (
                  <div className="col-md-3 col-sm-6 mt-2 animate__animated animate__fadeIn" key={e.COD_EMPRESA}>
                    <div className="card card-styles" >
                      <div className="card-body">
                        <h5 className="card-title title-empresa">{cortarNombreEmpresa(e.NOMBRE)}</h5>
                        <button onClick={() => selectEmpresa(e.NOMBRE, e.COD_EMPRESA)} className="btn btn-primary mt-3 btn-ingresar">
                          Ingresar
                          <ShortcutIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          )
        )
      }
      </div>
    </>
  )
}
