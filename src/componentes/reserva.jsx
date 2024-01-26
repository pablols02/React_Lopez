import React from 'react';
import Foto1 from '../assets/class-1.jpg';
import Foto2 from '../assets/class-2.jpg';

const ClassContainer = () => {
  return (
    <section className="section__container class__container" id="clases">
      <div className="class__image">
        <span className="bg__blur"></span>
        <img src={Foto1} alt="class" className="class__img-1" />
        <img src={Foto2} alt="class" className="class__img-2" />
      </div>
      <div className="class__content">
        <h2 className="section__header">UNETE A CLASES CON MONITORES</h2>
        <p>
        Explora un mundo de energía y motivación con nuestras
        clases dirigidas por expertos instructores. Cada
        sesión es una oportunidad única para desafiarte, mejorar
        tu salud y alcanzar tus metas fitness. ¿Listo para vivir una
        experiencia única en cada clase? ¡Accede ahora y déjate guiar
        por nuestros monitores hacia tu mejor versión!
        </p>
        <button className="btn">Ver clases</button>
      </div>
    </section>
  );
};

export default ClassContainer;