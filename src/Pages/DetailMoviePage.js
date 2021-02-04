import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Jumbotron, Container, Button } from "reactstrap";
import { getDetailMovieById } from "../Redux/actions/HomePage";
import { imgUrl } from "../Utils/constants";

const DetailMoviePage = ({ movie, getDetailMovieById }) => {
  const { id } = useParams();

  useEffect(() => {
    getDetailMovieById(id);
  }, []);

  return (
    <div>
      <div>
        <Jumbotron
          style={{
            backgroundImage: `url(${imgUrl}/${movie.backdrop_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: "0.6",
            color: "white",
            width: "100%",
            height: "400px",
          }}
        >
          <h1 className="display-3">{movie.title}</h1>
          <p className="lead">Popularity : {movie.popularity}</p>
          <hr className="my-2" />
        </Jumbotron>
        <Container>
          <div>
            <Button className="mr-2 mb-2 rounded-pill" outline color="info">
              Overview
            </Button>
            <Button className="mr-2 mb-2 rounded-pill" outline color="info">
              Character
            </Button>
            <Button className="mr-2 mb-2 rounded-pill" outline color="info">
              Review
            </Button>
          </div>
          <div>
            <h4>Synopsys</h4>
            <p>{movie.overview}</p>
          </div>
          <div>
            <h4>Detail Movie</h4>
            <ul style={{ listStyle: "none" }}>
              <li>
                <span>Release Date</span> : {movie.release_date}
              </li>
              <li>
                <span>Tagline</span> : {movie.tagline}
              </li>
              <li>
                <span>Status</span> : {movie.status}
              </li>
              <li>
                <span>Vote Average</span> : {movie.vote_average}
              </li>
            </ul>
          </div>
        </Container>
        <br />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.homePage.movie,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDetailMovieById: (id) => dispatch(getDetailMovieById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);
