import BrandLogo from "../Assets/Images/brand-logo.png";
import "../Assets/Styles/NavbarStyle.css";
import LogIn from '../Pages/LoginModal.js';
import { Link } from 'react-router-dom';
import { StyledNavbar, StyledImg, StyledInput } from '../Assets/Styles/styled';

export default function Navbar() {
  return (
    <StyledNavbar>
      <Link to='/'><StyledImg src={BrandLogo} alt='logo'/></Link>
      <li>
          <Link className='search-page' to='/'><StyledInput type='text' placeholder='Search movie'/></Link>
      </li>
      <li>
          <LogIn />
      </li>
    </StyledNavbar>
  );
}
