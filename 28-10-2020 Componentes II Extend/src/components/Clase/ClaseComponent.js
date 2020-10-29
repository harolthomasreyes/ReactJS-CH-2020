import React from "react";

class ClaseComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      intervalo: undefined,
    };
  }

  capturarTiempo = () => {
    console.log("capturarTiempo - Clase");
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("tiempoClase").innerHTML = t;
  };

  detenerTiempo = () => {
    clearInterval(this.state.intervalo);
  };

  iniciarTiempo = () => {
    this.setState({ intervalo: setInterval(this.capturarTiempo, 1000) });
  };

  componentWillUnmount() {
    this.detenerTiempo();
    console.log("componentWillUnmount - Clase");
  }

  render() {
    return (
      <div>
        <h3>Clase componente</h3>
        <button onClick={this.props.cambiarModo}>cambiar Modo</button>
        <p id="tiempo"></p>
        <div></div>

        <button onClick={this.iniciarTiempo}>Iniciar</button>
        <button onClick={this.capturarTiempo}>capturar</button>
        <button onClick={this.detenerTiempo}>Detener</button>

        <br />
        <p>Nombre: {this.props.nombre}</p>
        <input
          type="text"
          onChange={this.props.cambiarNombre}
          placeholder={this.props.nombre}
        ></input>
        <br />
        <button onClick={this.props.sumar}>+</button>
        <p>contado: {this.props.contador}</p>

        <button onClick={this.props.restar}>-</button>
      </div>
    );
  }
}

export default ClaseComponent;
