import React from 'react';
import { NavLink } from 'react-router-dom';

const BarraNavegacion = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/listaautores">Autores</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to="/listaautores" className="nav-link" aria-current="page">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/crearautor" className="nav-link">Crear</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default BarraNavegacion