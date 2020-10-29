function ListaComponent(props) {
  const datos = ["Marta", "Carolina", "Eve", "Camilo"];
  const miLista = datos.map((nombre, index) => <li key={index}>{nombre}</li>);

  return <ol>{miLista}</ol>;
}

export default ListaComponent;
