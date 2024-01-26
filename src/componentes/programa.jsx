import React, { PureComponent } from 'react'
import { Zoom } from "react-awesome-reveal";

export default class programa extends PureComponent {
render() {

    return (
        <section className="section__container explore__container" id="programas">
        <Zoom>
        <div className="explore__header">
        <h2 className="section__header">ELIGE TU PLAN DE ENTRENAMIENTO</h2>
        <div className="explore__nav">
            <span><i className="ri-arrow-left-line"></i></span>
            <span><i className="ri-arrow-right-line"></i></span>
        </div>
        </div>
        <div className="explore__grid">
        <div className="explore__card">
            <span><i className="ri-boxing-fill"></i></span>
            <h4>Fuerza</h4>
            <p>
            Descubre la esencia transformadora de la fuerza en
            nuestro programa. Únete ahora y fortalece cuerpo, mente y emociones
            </p>
            <a href="#">¡Vamos! <i className="ri-arrow-right-line"></i></a>
        </div>
        <div className="explore__card">
            <span><i className="ri-heart-pulse-fill"></i></span>
            <h4>Acondicionamiento Físico</h4>
            <p>
            Incluye una variedad de actividades que
            mejoran la salud, la fuerza, la flexibilidad y el bienestar general.
            </p>
            <a href="#">¡Vamos! <i className="ri-arrow-right-line"></i></a>
        </div>
        <div className="explore__card">
            <span><i className="ri-run-line"></i></span>
            <h4>Pérdida de Grasa</h4>
            <p>
            Atrévete a alcanzar tus metas de pérdida de
            grasa con nuestras rutinas y orientación experta.
            </p>
            <a href="#">¡Vamos! <i className="ri-arrow-right-line"></i></a>
        </div>
        <div className="explore__card">
            <span><i className="ri-shopping-basket-fill"></i></span>
            <h4>Aumento de Peso</h4>
            <p>
            Diseñado para individuos que buscan un enfoque
            efectivo para ganar peso de manera sostenible.
            </p>
            <a href="#">¡Vamos! <i className="ri-arrow-right-line"></i></a>
        </div>
        </div>
        </Zoom>
    </section>
    
    )
}
}