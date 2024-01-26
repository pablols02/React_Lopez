import React, { PureComponent } from 'react'

export default class planes extends PureComponent {
  render() {
    return (
        <section class="section__container price__container">
        <h2 class="section__header">PLANES DE PAGO</h2>
        <p class="section__subheader">
        Nuestro plan de precios cuenta con diferentes niveles de
        membresía, cada uno adaptado para satisfacer diversas
        preferencias y aspiraciones de fitness.
        </p>
        <div class="price__grid">
          <div class="price__card">
            <div class="price__card__content">
              
              <h4>Plan basico</h4>
              <h3>16€</h3>
              <p>
                <i class="ri-checkbox-circle-line"></i>
                Plan de entrenamiento inteligente
              </p>
              <p>
                <i class="ri-checkbox-circle-line"></i>
                Entrenamientos en casa
              </p>
            </div>
            <button class="btn price__btn">Más información</button>
          </div>
          <div class="price__card">
            <div class="price__card__content">
              <h4>Plan semanal</h4>
              <h3>25€</h3>
              <p>
                <i class="ri-checkbox-circle-line"></i>
                PRO Gyms
              </p>
              <p>
                <i class="ri-checkbox-circle-line"></i>
                Plan de entrenamiento inteligente
              </p>
              <p>
                <i class="ri-checkbox-circle-line"></i>
                Entrenamientos en casa
              </p>
            </div>
            <button class="btn price__btn">Más información</button>
          </div>
          <div class="price__card">
            <div class="price__card__content">
              <h4>Plan mensual</h4>
              <h3>45€</h3>
              <p>
                <i class="ri-checkbox-circle-line"></i>
                Acceso a clases
              </p>
              <p>
                <i class="ri-checkbox-circle-line"></i>
                PRO Gyms
              </p>
              <p>
                <i class="ri-checkbox-circle-line"></i>
                Plan de entrenamiento inteligente
              </p>
              <p>
                <i class="ri-checkbox-circle-line"></i>
                Entrenamientos en casa
              </p>
              <p>
                <i class="ri-checkbox-circle-line"></i>
                Entrenador personal
              </p>
            </div>
            <button class="btn price__btn">Más información</button>
          </div>
        </div>
      </section>
    )
  }
}
