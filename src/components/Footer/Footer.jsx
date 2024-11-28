import logo from "../../assets/images/logo_footer.png";

export default function Footer() {
  return (
    <footer className="footer-container">
      <img src={logo} alt="logo kasa" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
