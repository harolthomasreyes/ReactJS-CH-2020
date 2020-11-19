import { GetDBFireBase } from "./tools/firebaseFactory";
import Navbar from "./components/Navbar";

function App() {
  const DBContext = GetDBFireBase();

  function getAll() {
    const productos = DBContext.collection("productos");

    productos
      .get()
      .then((result) => {
        if (result.size === 0) {
          console.log("Sin resultados");
        }

        result.docs.map((doc) => console.log(doc.data()));
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  }
  function getById(id) {
    const producto = DBContext.collection("productos").doc(id);
    producto
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("Sin resultados");
        }

        console.log({ id: id, ...doc.data() });
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  }
  function getByWhere() {
    const productos = DBContext.collection("productos");
    const filter = productos.where("stock", ">=", 1);

    filter
      .get()
      .then((result) => {
        if (result.size === 0) {
          console.log("Sin resultados");
        }

        result.docs.map((doc) => console.log(doc.data()));
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  }

  return (
    <div className="App">
      <Navbar />
      <button onClick={getAll}>Get all</button>
      <button onClick={() => getById("d4vy1f469FSn8jTeeebK")}>Get by id</button>
      <button onClick={getByWhere}>Get by where</button>
    </div>
  );
}

export default App;
