import './App.css';
import Cabecera from './componentes/cabecera';
import Inicio from './componentes/inicio';
import Programa from './componentes/programa';
import Reserva from './componentes/reserva';
import Nosotros from './componentes/nosotros';
import Planes from './componentes/planes';
import Contacto from './componentes/contacto';
import Pie from './componentes/pie';


function App() {
  return (
    <div className="App">
      <div><Cabecera/></div>
      <div><Inicio/></div>
      <div><Programa/></div>
      <div><Reserva/></div>
      <div><Nosotros/></div>
      <div><Planes/></div>
      <div><Contacto/></div>
      <div><Pie/></div>
    </div>
  );
}

export default App;