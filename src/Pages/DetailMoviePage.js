import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col, Jumbotron, Container } from 'reactstrap';
import classnames from 'classnames';

import { getDetailMovieById, getReviewMovieById } from "../Redux/actions/HomePage";
import { imgUrl } from "../Utils/constants";

const DetailMoviePage = ({ movie, review, getDetailMovieById, getReviewMovieById }) => {
  const { id } = useParams();

  useEffect(() => {
    getDetailMovieById(id);
    getReviewMovieById(id);
  }, [])


  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }
  return (
    <div>
      {/* Banner movie */}
      <Jumbotron
        className="mb-3"
        style={{
          backgroundImage: `url(${imgUrl}/${movie.backdrop_path})`,
          backgroundSize: "cover",
        }}
      >
        <img src="" alt="" />
        <Container>

          <div className="text-white">
            <h1>{movie.title}</h1>
            <span>{movie.vote_average}/10</span>{" "}
            <span>{movie.vote_count} votes</span>
            <br /> <br />
            <p className="lead">{movie.tagline}</p>
            <p className="lead">
              <Button color="primary mr-4">Watch Trailer</Button>
              <Button color="primary">Add To Watch List</Button>
            </p>
          </div>
        </Container>

      </Jumbotron>

      <Container>
        {/* Tab Detail */}
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Overview
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Character
          </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              Review
          </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          {/* Overview */}
          <TabPane tabId="1">
            <Row className="my-4">
              <Col sm="12">
                <h3>Synopsis</h3>
                <span>{movie.overview}</span>
                <hr />
                <h4>Movie Detail</h4>
                <tr >
                  <th className="pr-3">Release Date</th>
                  <td className="pr-3"> : </td>
                  <td>{movie.release_date}</td>
                </tr>
                <tr >
                  <th className="pr-3">Duration</th>
                  <td className="pr-3"> : </td>
                  <td>{movie.runtime} minutes</td>
                </tr>
                <tr >
                  <th className="pr-3">Budget</th>
                  <td className="pr-3"> : </td>
                  <td>$ {movie.budget}</td>
                </tr>

              </Col>
            </Row>
          </TabPane>

          {/* Character */}
          <TabPane tabId="2">
            <Row className="my-4">
              <Col sm="12">
                <span className="mx-2">
                  <img
                    className="img-card-character"
                    src="https://www.themoviedb.org/t/p/w138_and_h175_face/amOshiwsbyIyvkhm9QK48xuafyH.jpg"
                    alt="character"
                  />
                  <p className="">Character Name</p>
                </span>
              </Col>
            </Row>
          </TabPane>


          <TabPane tabId="3">
            <Row className="my-4">
              <Col sm="12">
                <h3>{review.content}</h3>
              </Col>
            </Row>
          </TabPane>

        </TabContent>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.homePage.movie,
    review: state.homePage.review
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getReviewMovieById: (id) => dispatch(getReviewMovieById(id)),
    getDetailMovieById: (id) => dispatch(getDetailMovieById(id)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);
