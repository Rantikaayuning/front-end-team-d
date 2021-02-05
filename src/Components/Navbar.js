import BrandLogo from "../assets/Images/brand-logo.png";
import SignIn from "../pages/Modal.js";
import { Link } from "react-router-dom";
import { StyledNavbar, StyledImg, StyledInput } from "../assets/styles/styled";

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link to="/">
        <StyledImg src={BrandLogo} alt="logo" />
      </Link>
      <li>
        <Link className="search-page" to="/">
          <StyledInput type="text" placeholder="Search movie" />
        </Link>
      </li>
      <li>
        <SignIn />
      </li>
    </StyledNavbar>
  );
}
