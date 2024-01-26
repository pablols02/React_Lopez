import React, { PureComponent } from 'react'
import Carrusel from './carrusel';

export default class nosotros extends PureComponent {
  render() {
    return (
        <section class="section__container join__container" id="nosotros">
        <h2 class="section__header">¿QUIÉNES SOMOS?</h2>
        <p class="section__subheader">
        Nuestra diversa comunidad crea un ambiente amigable
        y motivador. Descubre instalaciones de primera para
        potenciar tu bienestar. ¡Únete y vive una experiencia
        fitness excepcional!
        </p>
        <div class="join__image">
            <Carrusel />
          <div class="join__grid">
            <div class="join__card">
              <span><i class="ri-user-star-fill"></i></span>
              <div class="join__card__content">
                <h4>Entrenador personal</h4>
                <p>Desbloquea tu potencial con nuestros entrenadores.</p>
              </div>
            </div>
            <div class="join__card">
              <span><i class="ri-vidicon-fill"></i></span>
              <div class="join__card__content">
                <h4>Sesiones grabadas</h4>
                <p>Entrena desde casa con sesiones grabadas.</p>
              </div>
            </div>
            <div class="join__card">
              <span><i class="ri-building-line"></i></span>
              <div class="join__card__content">
                <h4>Grandes instalaciones</h4>
                <p>Los mejores instalaciones de la ciudad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
