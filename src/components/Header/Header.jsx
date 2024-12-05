import logo from "../../assets/images/logo_home.png";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="headerWrap">
      <figure className="headerWrap__fig">
        <img className="logo" src={logo} alt="logo kasa" />
      </figure>
      <nav className="nav-header">
        <Link
          to="/"
          className={`nav-header_link-home ${
            location.pathname === "/" ? "active-link" : ""
          }`}
        >
          Accueil
        </Link>
        <Link
          to="/about"
          className={`nav-header_link-about ${
            location.pathname === "/about" ? "active-link" : ""
          }`}
        >
          À Propos
        </Link>
      </nav>
    </header>
  );
}
