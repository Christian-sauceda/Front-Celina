import { Sidebar } from "../../ui"


import './stylesInicioPage.css'

export const InicioPage = () => {
 
  return (
    <>
      {/* <Sidebar> */}

        {/* <h1>Bienvenido a APPTECK © {new Date().getFullYear()}</h1> */}
        <div className="container container_inicio_styles d-flex justify-content-center align-middle flex-column flex-md-row mt-1 animate__animated animate__fadeIn">
          <div className="bienvenido_styles">
            Bienvenido a
          </div>
          <h1 className="empresa_title_inicio_styles">APPTECK</h1>
          <div className="copyright_styles_inicio">
            © {new Date().getFullYear()} Celina.
          </div>
        </div>

      {/* </Sidebar> */}
    </>
  )
}
