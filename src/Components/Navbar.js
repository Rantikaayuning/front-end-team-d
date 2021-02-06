import React, { useState } from "react";
import BrandLogo from "../Assets/Images/brand-logo.png";
import SignIn from "../Pages/Modal.js";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { StyledNavbar, StyledImg, StyledInput } from "../Assets/Styles/styled";
import { getValue } from "../Redux/types/HomePage";
import { getSearchValue } from "../Redux/actions/HomePage";

const Navbar = ({value, getSearchValue, getValue}) => {
  const [search, setSearch] = useState(value)

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    getSearchValue(search)
  }

  console.log('value=', value);
  return (
    <StyledNavbar>
      <Link to="/">
        <StyledImg src={BrandLogo} alt="logo" />
      </Link>
      <li>
        <Link to='/search-page'>
          <form action='' onSubmit={handleSubmit}>
            <StyledInput type="text" placeholder="Search movie" onChange={handleChange}/>
          </form>
        </Link>
      </li>
      <li>
        <SignIn />
      </li>
    </StyledNavbar>
  );
}

const mapStateToProps = state => {
  return {
      value: state.homePage.value
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getValue: (value) => dispatch(getValue(value)),
      getSearchValue: (value) => dispatch(getSearchValue(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);