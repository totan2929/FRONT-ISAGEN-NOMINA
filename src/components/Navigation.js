import React from 'react'
import logo from '../assent/logo.svg';
import {
    NavLink
  } from "react-router-dom";
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome';
import { faBars , faTimesCircle,faUserFriends,
         faFileDownload, faAddressCard, faChevronCircleRight, faTasks,
         faPlane, faUserClock
} from '../../node_modules/@fortawesome/free-solid-svg-icons';

export default function Navigation() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg__navigation">
                <div className="container-fluid">
                    <div className="container__logo">
                        <img src={logo} className='img__logo' alt="logo__isagen" />
                        <h3 className="ms-2">ISAGEN</h3>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""><FontAwesomeIcon icon={faBars} /></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ms-md-2">
                                <NavLink className="nav-link" aria-current="page" to='/home'><FontAwesomeIcon icon={faChevronCircleRight} /> Inicio</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="btn ms-2 dropdown-toggle"  id="menuDropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faTasks} />  Procesar
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="menuDropdown">
                                    <li><NavLink className="dropdown-item" to='/permisos'><FontAwesomeIcon icon={faUserClock} /> Permisos</NavLink></li>
                                    <li><NavLink className="dropdown-item" to='/vacaciones'><FontAwesomeIcon icon={faPlane} /> Vacaciones</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to='/user'><FontAwesomeIcon icon={faUserFriends} /> Usuarios</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to='/reporte'><FontAwesomeIcon icon={faFileDownload} /> Reportes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to='/nomina'><FontAwesomeIcon icon={faAddressCard} /> Nómina</NavLink>
                            </li>
                        </ul>
                        <div>
                            <NavLink className="btn btn-dangerP " to="/"><FontAwesomeIcon icon={faTimesCircle} /> Cerrar Sesión</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
