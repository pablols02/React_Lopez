import './App.css';
import Cabecera from './componentes/cabecera';
import Inicio from './componentes/inicio';
import Programa from './componentes/programa';
import Reserva from './componentes/reserva';
import Nosotros from './componentes/nosotros';
import Planes from './componentes/planes';
import Contacto from './componentes/contacto';
import Pie from './componentes/pie';
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";


function App() {
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
  setLoading(false)
  
  },3000)
  
  },[])

  return (
    <div className="App">
      {
        loading?
        <HashLoader color="#d79447" className='loader'/>
      :
      <div>
        <div><Cabecera/></div>
        <div><Inicio/></div>
        <div><Programa/></div>
        <div><Reserva/></div>
        <div><Nosotros/></div>
        <div><Planes/></div>
        <div><Contacto/></div>
        <div><Pie/></div>
      </div>
      }
    </div>
  );
}

export default App;