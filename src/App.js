import './App.css';
import React, {Component} from 'react';

class App extends React.Component{
  render() {
    const empleado = {
      nombre: 'juan',
      trabajo: 'desarrollador web'
    }
    return (
      <div className="contenedor">
        <h1 className="mayusculas"> Detalles de: </h1>
        <p>Nombre: {empleado.nombre}</p>
        <p>Nombre: {empleado.trabajo}</p>
      </div>
    );
  }
}


export default App;
