import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getGenreList, getMovies, getMovieByGenre } from '../../redux/actions/homePage';
import { imgUrl, items } from '../../utils/constants';
import { UncontrolledCarousel } from 'reactstrap';
import { Card, CardBody, CardImg, Col, Container, Row } from "reactstrap";
import { StyledGenre, Title, GroupButton } from '../../assets/styles/styled';
import PaginationMovie from '../../components/Pagination'

const HomePage = ({getGenreList, getMovieByGenre, getMovies, movies, genres, id}) => {

    useEffect(() => {
        getMovies();
    }, [getMovies])

    useEffect(() => {
        getGenreList();
    }, [getGenreList]);

    return (
    <>
      <style>
        {
          `.carousel img{
              max-width: 100%;
              height: 400px;
            }`
        }
      </style>
      <UncontrolledCarousel items={items} className='carousel'/>
      <br />
      <StyledGenre>
        <p>Browse by Category</p>
      </StyledGenre>
        <Container >
          {genres.length !== 0 ? (
          genres.map((genre) => (
            <GroupButton outline color="info" key={genre.id} onClick={() => getMovieByGenre(genre.id)}>{genre.name}</GroupButton>    
          ))
        ) : " " }
        <p></p>
        <Row >
          {movies !== 0 ? movies.map((movie) => (
              <Col md={3} key={movie.id} >
                  <Card style={{marginBottom: "20px"}}>
                    <CardImg src={`${imgUrl}${movie.poster_path}`} />
                    <CardBody>
                    <Title>{movie.title}</Title>
                    <p>{movie.release_date}</p>
                    </CardBody>
                  </Card>
              </Col>
              )) : ""}
        </Row>
          <PaginationMovie />
        </Container>
      </>
    )
}

const mapStateToProps = state => {
    return {
        movies: state.homePage.movies,
        genres: state.homePage.genres,
        id: state.homePage.id,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMovies: () => dispatch(getMovies()),
        getGenreList: () => dispatch(getGenreList()),
        getMovieByGenre: (id) => dispatch(getMovieByGenre(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);