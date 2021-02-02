import BrandLogo from "../Assets/Images/brand-logo.png";
import "../Assets/Styles/NavbarStyle.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={BrandLogo} />
      </div>
      <div className="form-search">
        <input type="search" placeholder="Search movie" />
        <button>Search</button>
      </div>
      <div className="nav-sign">
        <span>Sign In</span>
      </div>
    </div>
  );
}
