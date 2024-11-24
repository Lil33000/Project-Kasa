import logo from "../../assets/images/logo_home.png";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header className="headerWrap">
			<figure className="headerWrap__fig">
				<img className="logo" src={logo} alt="logo kasa" />
			</figure>
			<nav className="nav-header">
			<Link to="/" className="nav-header_link-home">
				Accueil
			</Link>
			<Link to="/about" className="nav-header_link-about">
				A Propos
			</Link>
		</nav>
		</header>
	);
}