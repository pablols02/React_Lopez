import React, { PureComponent } from 'react'
import Header from '../assets/header.png';
import { Fade } from "react-awesome-reveal";

export default class inicio extends PureComponent {
  render() {
    return (
        <header className="section__container header__container">
        <Fade>
        <div className="header__content">
          <span className="bg__blur"></span>
          <span className="bg__blur header__blur"></span>
          <h4>LOS MEJORES GIMNASIOS DE LA CIUDAD</h4>
          <h1><span>INVIERTE</span> EN TU CUERPO</h1>
          <p>
          Libera tu potencial y emprende un viaje hacia un tú más
          fuerte, más en forma y con más confianza. ¡Regístrate
          ahora en 'Gym Musculitos' y contempla la increíble
          transformación de la que tu cuerpo es capaz!
          </p>
          <button className="btn">¡Empieza ya!</button>
        </div>
        <div className="header__image">
          <img src={Header} alt="header" />
        </div>
        </Fade>
      </header>
    )
  }
}
