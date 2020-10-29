function FuncionComponent(props) {
  let intervalo;

  const capturarTiempo = () => {
    console.log("capturarTiempo - Funcion");
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("tiempo").innerHTML = t;
  };

  const detenerTiempo = () => {
    clearInterval(intervalo);
  };

  const iniciarTiempo = () => {
    intervalo = setInterval(capturarTiempo, 1000);
  };

  return (
    <div>
      <h3>Funcion componente</h3>
      <button onClick={props.cambiarModo}>cambiar Modo</button>
      <p id="tiempo"></p>
      <button onClick={iniciarTiempo}>Iniciar</button>
      <button onClick={capturarTiempo}>capturar</button>
      <button onClick={detenerTiempo}>Detener</button>

      <br />
      <p>Nombre: {props.nombre}</p>
      <input
        type="text"
        onChange={props.cambiarNombre}
        placeholder={props.nombre}
      ></input>
      <br />
      <button onClick={() => this.sumar()}>+</button>
      <p>contado: {props.contador}</p>

      <button onClick={() => this.restar()}>-</button>
    </div>
  );
}

export default FuncionComponent;
