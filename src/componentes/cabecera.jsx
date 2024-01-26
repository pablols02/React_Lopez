import React, { PureComponent } from 'react'
import Logo from '../assets/logo.png';

export default class Cabecera extends PureComponent {
  render() {
    return (
      <>
        <nav className="nav">
          <div className="nav__logo">
            <a href="#"><img src={Logo} alt="logo" /></a>
          </div>
          <ul className="nav__links">
            <li className="link"><a href="#inicio">Inicio</a></li>
            <li className="link"><a href="#programas">Programa</a></li>
            <li className="link"><a href="#clases">Clases</a></li>
            <li className="link"><a href="#nosotros">Sobre nosotros</a></li>
            <li className="link"><a href="#contacto">Contacto</a></li>
          </ul>
          <a href="https://maps.app.goo.gl/gwp3p8gbpW2mhCf78" target="_blank"><button className="btn">Ver ubicación</button></a>
        </nav>
      </>
    )
  }
}
