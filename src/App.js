import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarExample from "./components/Navbar";
import ItemListContainer from "./components/itemListContainet";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavbarExample />
        <img src={logo} className="App-logo" alt="logo" />
        <ItemListContainer greeting={"¡Hola Coders!"} />
        <p>Esta es mi primera aplicación de React.</p>
      </header>
    </div>
  );
}

export default App;
