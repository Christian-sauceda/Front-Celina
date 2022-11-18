import HomeIcon from '@mui/icons-material/Home';
import StorageIcon from '@mui/icons-material/Storage';
import CalculateIcon from '@mui/icons-material/Calculate';
import SummarizeIcon from '@mui/icons-material/Summarize';
import BuildIcon from '@mui/icons-material/Build';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import './stylesSidebar.css'

import imagenPerfil from '../../assets/perfil.png'
import { NavLink } from 'react-router-dom';

export const Sidebar = ( {children} ) => {
  return (
    <div className="container-fluid">
        <div className="row flex-nowrap">
            <div className="col-auto px-0 sidebar_nav_styles">
                <div id="sidebar" className="collapse collapse-horizontal show border-end">

                    <div id="sidebar-nav" className="list-group border-0 rounded-0 text-sm-start min-vh-100 sidebar_nav_styles">
                        
                        <h3 className='text-center my-2'>APPTECK</h3>

                        {/* Perfil Usuario */}
                        <div className="card card_styles">
                            <div className='d-flex justify-content-center mt-3'>
                                <img src={imagenPerfil} className="card-img-top rounded-circle img_profile " alt="Profile" />
                            </div>
                            <div className="card-body">
                                <div className='d-flex flex-column align-items-center'>
                                    <span className='profile_username_styles'>Lucas</span>
                                    <span className='role_title_styles'>Super Administrador</span>
                                </div>

                                <div className='d-flex justify-content-between my-2'>
                                    <NavLink to='/profile'><PersonIcon /></NavLink>
                                    <NavLink href='#'><SettingsIcon /></NavLink>
                                    <NavLink to='/empresas-init'><LogoutIcon /></NavLink>
                                </div>
                            </div>
                        </div>
                        {/* Inicio */}
                        <NavLink to='/inicio' className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><HomeIcon fontSize='small' />
                            <span>Inicio</span>
                        </NavLink>

                        {/* Adminitracion Collapse */}
                        <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate d-flex justify-content-between" data-bs-parent="#sidebar" data-bs-toggle="collapse" data-bs-target="#collapseAdminitracion" aria-expanded="false" aria-controls="collapseAdminitracion">
                            <StorageIcon fontSize='small' /> <span>Adminitracion</span><ArrowDropDownIcon fontSize='small'  />
                        </a>
                        <div className="collapse collapse_styles" id="collapseAdminitracion">

                            <NavLink to='/administracion/usuarios' className="list-group-item border-end-0 d-inline-block text-truncate w-100" data-bs-parent="#sidebar">
                                <KeyboardArrowRightIcon fontSize='small' /> 
                                <span>Usuarios</span> 
                            </NavLink>


                            <NavLink to='/administracion/empresas' className="list-group-item border-end-0 d-inline-block text-truncate w-100" data-bs-parent="#sidebar">
                                <KeyboardArrowRightIcon fontSize='small' />
                                <span>Empresas</span>
                            </NavLink>


                            <NavLink to='/administracion/tipo-asientos' className="list-group-item border-end-0 d-inline-block text-truncate w-100" data-bs-parent="#sidebar">
                                <KeyboardArrowRightIcon fontSize='small' />
                            <span>Tipos de Asientos</span>
                            </NavLink>
                        </div>


                        {/* Contabilidad Collapse */}
                        <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate d-flex justify-content-between" data-bs-parent="#sidebar" data-bs-toggle="collapse" data-bs-target="#collapseContabilidad" aria-expanded="false" aria-controls="collapseContabilidad">
                            <CalculateIcon fontSize='small' /> <span>Contabilidad</span><ArrowDropDownIcon fontSize='small'  />
                        </a>
                        <div className="collapse collapse_styles" id="collapseContabilidad">
                            <NavLink to='/contabilidad/catalogo-cuentas' className="list-group-item border-end-0 d-inline-block text-truncate w-100" data-bs-parent="#sidebar">
                                <KeyboardArrowRightIcon fontSize='small' />
                                <span>Catalogo de Cuentas</span>
                            </NavLink>

                            <NavLink to='/contabilidad/generacion-asientos' className="list-group-item border-end-0 d-inline-block text-truncate w-100" data-bs-parent="#sidebar">
                                <KeyboardArrowRightIcon fontSize='small' />
                                <span>Generar Asientos</span>
                            </NavLink>
                        </div>

                        {/* Reportes Collapse */}
                        <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate d-flex justify-content-between" data-bs-parent="#sidebar" data-bs-toggle="collapse" data-bs-target="#collapseReportes" aria-expanded="false" aria-controls="collapseReportes">
                            <SummarizeIcon fontSize='small' /> <span>Reportes</span><ArrowDropDownIcon fontSize='small'  />
                        </a>
                        <div className="collapse collapse_styles" id="collapseReportes">
                            <NavLink to='/reportes/balancegeneral' className="list-group-item border-end-0 d-inline-block text-truncate w-100" data-bs-parent="#sidebar">
                                <KeyboardArrowRightIcon fontSize='small' />
                                <span>Balance General</span>
                            </NavLink>
                            
                            <NavLink to='/reportes/balanzacomprobacion'className="list-group-item border-end-0 d-inline-block text-truncate w-100" data-bs-parent="#sidebar"><KeyboardArrowRightIcon fontSize='small' /> <span>Balanza de Comprobacion</span> </NavLink>
                            <NavLink to='/reportes/estadoresultado'className="list-group-item border-end-0 d-inline-block text-truncate w-100" data-bs-parent="#sidebar"><KeyboardArrowRightIcon fontSize='small' /> <span>Estado de Resultado</span> </NavLink>
                            <NavLink to='/reportes/librodiario'className="list-group-item border-end-0 d-inline-block text-truncate w-100" data-bs-parent="#sidebar"><KeyboardArrowRightIcon fontSize='small' /> <span>Libro Diario</span> </NavLink>
                            <NavLink to='/reportes/libromayor'className="list-group-item border-end-0 d-inline-block text-truncate w-100" data-bs-parent="#sidebar"><KeyboardArrowRightIcon fontSize='small' /> <span>Libro Mayor</span> </NavLink>
                        </div>

                        {/* Utilidades Collapse */}
                        <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate d-flex justify-content-between" data-bs-parent="#sidebar" data-bs-toggle="collapse" data-bs-target="#collapseUtilidades" aria-expanded="false" aria-controls="collapseUtilidades">
                            <BuildIcon fontSize='small' /> <span>Utilidades</span><ArrowDropDownIcon fontSize='small'  />
                        </a>
                        <div className="collapse collapse_styles" id="collapseUtilidades">
                            <NavLink to='/utilidades/bitacora' className="list-group-item border-end-0 d-inline-block text-truncate w-100" data-bs-parent="#sidebar"><KeyboardArrowRightIcon fontSize='small' /> <span>Consulta Bitacora</span> </NavLink>
                        </div>

                        <a href="#" className="list-group-item border-end-0 d-inline-block text-truncate salir_sistema_styles mt-5" data-bs-parent="#sidebar"><PowerSettingsNewIcon fontSize='small' /> <span>Salir del Sistema</span></a>
                    </div>
                </div>
            </div>
            <main className="col ps-md-2 pt-2 ">

                <MenuIcon 
                    fontSize='large' 
                    data-bs-target="#sidebar" 
                    data-bs-toggle="collapse" 
                    className="border rounded-3 p-1 text-decoration-none" 
                    sx={{
                        cursor: 'pointer'
                    }} 
                />

                {children}

                {/* <div className="page-header pt-3">
                    <h2>Bootstrap 5 Sidebar Menu - Simple</h2>
                </div>
                <p className="lead">A offcanvas "push" vertical nav menu example.</p>
                <hr />
                <div className="row">
                    <div className="col-12">
                        <p>This is a simple collapsing sidebar menu for Bootstrap 5. Unlike the Offcanvas component that overlays the content, this sidebar will "push" the content. Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>
                        <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                    </div>
                </div> */}



            </main>
        </div>
    </div>

  )
}
