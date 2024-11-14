import "../css/header.css";
import logoHome from "../assets/images/logo_home.png";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
      <header className="header">
        <Link to="/">
          <img className="logo" src={logoHome} alt="Logo Kasa" />
        </Link>
        <nav>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? 'nav-active' : 'nav-inactive')}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? 'nav-active' : 'nav-inactive')}
          >
            À propos
          </NavLink>
        </nav>
      </header>
    )
  }