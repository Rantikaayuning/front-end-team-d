import {
  getMovieReq,
  getMovieSuccess,
  GET_MOVIE_GENRE,
  GET_BY_GENRE,
  GET_DETAIL_MOVIE, GET_REVIEW_MOVIE, GET_CAST_MOVIE
} from "../types/HomePage";
import axios from "axios";
import {
  movieUrl,
  nowPlaying,
  genreListUrl,
  apiKey,
} from "../../Utils/constants";

export const getMovies = () => {
  return (dispatch) => {
    dispatch(getMovieReq);
    return axios.get(`${movieUrl}${nowPlaying}`).then((response) => {
      const movies = response.data.results;
      dispatch(getMovieSuccess(movies));
    });
  };
};

export const getGenreList = () => {
  return (dispatch) => {
    return axios.get(`${genreListUrl}`).then((res) => {
      dispatch({
        type: GET_MOVIE_GENRE,
        payload: res.data.genres,
      });
    });
  };
};

export const getMovieByGenre = (id) => {
  return (dispatch) => {
    axios
      .get(
        `${movieUrl}movie/popular?${apiKey}&language=en-US&page=1discover/movie?${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
      )
      .then((res) => {
        dispatch({
          type: GET_BY_GENRE,
          payload: res.data.results,
        });
      });
  };
};

export const getDetailMovieById = (id) => {
  return (dispatch) => {
    axios.get(`${movieUrl}movie/${id}?${apiKey}&language=en-US&append_to_response=`).then((res) => {
      dispatch({
        type: GET_DETAIL_MOVIE,
        payload: res.data,
      });
    });
  };
};

export const getReviewMovieById = (id) => {
  return (dispatch) => {
    axios.get(`${movieUrl}movie/${id}/reviews?${apiKey}&language=en-US&`).then((res) => {
      dispatch({
        type: GET_REVIEW_MOVIE,
        payload: res.data.results,
      });
    });
  };
};

export const getCastMovieById = (id) => {
  return (dispatch) => {
    axios.get(`${movieUrl}movie/${id}/credits?${apiKey}&language=en-US&`).then((res) => {
      dispatch({
        type: GET_CAST_MOVIE,
        payload: res.data.cast,
      });
    });
  };
};
