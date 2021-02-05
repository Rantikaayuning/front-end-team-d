import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ButtonToolbar, Button, ButtonGroup } from 'reactstrap';
import { StyledNavbar } from '../Assets/Styles/styled';
import { getMovies } from '../Redux/actions/HomePage';

const PaginationMovie = (props) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    props.getMovies();
  }, [])

  const handlePage = (pg) => {
    setPage(pg);
    props.getMovies(pg)
  }

  return (
    <StyledNavbar>
      {page !== 0 && (
        <ButtonToolbar>
          <ButtonGroup>
            <Button outline color="info" onClick={() => handlePage(page - 1)}>Prev</Button>
            <Button outline color="info" onClick={() => handlePage(1)}>1</Button>
            <Button outline color="info" onClick={() => handlePage(2)}>2</Button>
            <Button outline color="info" onClick={() => handlePage(3)}>3</Button>
            <Button outline color="info" onClick={() => handlePage(4)}>4</Button>
            <Button outline color="info" onClick={() => handlePage(5)}>5</Button>
            <Button outline color="info" onClick={() => handlePage(page + 1)}>Next</Button>
          </ButtonGroup>
        </ButtonToolbar>
      )
      }
    </StyledNavbar>
  );
}

const mapStateToProps = state => {
  return {
    movies: state.homePage.movies,
    genres: state.homePage.genres,
    value: state.homePage.value
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMovies: (page) => dispatch(getMovies(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationMovie);