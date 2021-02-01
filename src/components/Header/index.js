import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/brand-logo.png';
import LogIn from '../../pages/Login/index';
import { StyledNavbar, StyledImg, StyledInput } from '../../assets/styles/styled';

function Header(props) {
    return (
        <StyledNavbar>
            <Link to='/'><StyledImg src={logo} alt='logo'/></Link>
            <li>
                <Link className='search-page' to='/'><StyledInput type='text' placeholder='Search movie'/></Link>
            </li>
            <li>
                <LogIn />
            </li>
        </StyledNavbar>
    )
}

export default Header;