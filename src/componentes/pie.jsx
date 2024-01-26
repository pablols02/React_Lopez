import React, { PureComponent } from 'react'
import Logo from '../assets/logo.png';

export default class pie extends PureComponent {
  render() {
    return (
        <>
        <footer class="section__container footer__container">
        <span class="bg__blur"></span>
        <span class="bg__blur footer__blur"></span>
        <div class="footer__col">
          <div class="footer__logo"><img src={Logo} alt="logo" /></div>
          <p>
          Da el primer paso hacia un tú más saludable y fuerte
          con nuestros planes de entranamiento. Disfruta de
          los mejores gimnasios y monitores de la ciudad.
          </p>
          <div class="footer__socials">
            <a href="#"><i class="ri-facebook-fill"></i></a>
            <a href="#"><i class="ri-instagram-line"></i></a>
            <a href="#"><i class="ri-twitter-fill"></i></a>
          </div>
        </div>
        <div class="footer__col">
          <h4>Empresa</h4>
          <a href="#">Negocio</a>
          <a href="#">Franquicia</a>
          <a href="#">Partners</a>
          <a href="#">Network</a>
        </div>
        <div class="footer__col">
          <h4>Sobre nosotros</h4>
          <a href="#">Blogs</a>
          <a href="#">Seguridad</a>
          <a href="#">Ubicacion</a>
        </div>
        <div class="footer__col">
          <h4>Contacto</h4>
          <a href="#">Telefono</a>
          <a href="#">Politica de privacidad</a>
          <a href="#">Terminos y Condiciones</a>
          <a href="#">Calculadora IMC</a>
        </div>
      </footer>
      <div class="footer__bar">
        Copyright © 2023 Pablo Lopez Sanchez.
      </div>
      </>
    )
  }
}
