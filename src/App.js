import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarExample from "./components/Navbar";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDatailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarExample />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Esta es mi primera aplicación de React.</p>
        <ItemCount />
        <ItemListContainer />
        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
