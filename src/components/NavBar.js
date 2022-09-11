import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    
<nav className="navbar navbar-expand-lg bg-light nav">
  <div className="container-fluid">
  <Link className="navbar-brand" to={'/Home'}>TiendaMate</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/Productos'}>Productos</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={'/Nosotros'}>Nosotros</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"><CartWidget></CartWidget></a>
        </li>
        <li className="nav-item dropdown">
          <ul className="dropdown-menu">
      
          </ul>
        </li>
      </ul>

    </div>
  </div>
</nav>
  )
}
export default NavBar