import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Nombre</label>
      <input type="text" name="nombre" />
      <label>Correo</label>
      <input type="email" name="email" />
      <label>Mensaje</label>
      <textarea name="mensaje" />
      <input type="submit" value="Enviar" />
    </form>
  );
};

export default Formulario;