import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3>E-commerce</h3>
      <ul className="menu">
        <li>
          <a>Inicio</a>
        </li>
        <li className="submenu--1">
          <a>Productos</a>
          <ul className="categories">
            <li>Hombre</li>
            <li>Mujer</li>
            <li>Niños</li>
          </ul>
        </li>
        <li>
          <a>Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
