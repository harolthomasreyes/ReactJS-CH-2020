import React from "react";
import FuncionComponent from "./components/Funcion/FuncionComponent";
import ClaseComponent from "./components/Clase/ClaseComponent";
import ListaComponent from "./components/Lista/Lista";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     modoFuncion: true,
  //     contador: 0,
  //     nombre: "aun nada",
  //   };
  // }

  // cambiarModo() {
  //   this.setState({ modoFuncion: !this.state.modoFuncion });
  // }

  // sumar() {
  //   console.log("sumo");
  //   this.setState({ contador: this.state.contador + 1 });
  // }
  // restar() {
  //   console.log("resto");
  //   this.setState({ contador: this.state.contador - 1 });
  // }

  // cambioNombre(event) {
  //   console.log(event.target.value);
  //   this.setState({ nombre: event.target.value });
  // }

  render() {
    // const componente = this.state.modoFuncion ? (
    //   <FuncionComponent
    //     cambiarModo={() => this.cambiarModo()}
    //     sumar={() => this.sumar()}
    //     restar={() => this.restar()}
    //     contador={this.state.contador}
    //     nombre={this.state.nombre}
    //     cambiarNombre={(event) => this.cambioNombre(event)}
    //   />
    // ) : (
    //   <ClaseComponent
    //     cambiarModo={() => this.cambiarModo()}
    //     sumar={() => this.sumar()}
    //     restar={() => this.restar()}
    //     contador={this.state.contador}
    //     nombre={this.state.nombre}
    //     cambiarNombre={(event) => this.cambioNombre(event)}
    //   />
    // );
    //return <div className="App">{componente}</div>;

    return (
      <div className="App">
        <ListaComponent />
      </div>
    );
  }
}

export default App;
