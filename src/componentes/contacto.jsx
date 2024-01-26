import React, { PureComponent } from 'react';
import Formulario from './formulario';
import { Slide } from "react-awesome-reveal";

export default class Contacto extends PureComponent {
  render() {
    return (
      <section className="review">
        <Slide direction="left">
        <div className="section__container review__container" id="contacto">
          <div className="review__content">
            <h2>CONTACTA CON NOSOTROS</h2>
            <Formulario />
          </div>
        </div>
        </Slide>
      </section>
    );
  }
}