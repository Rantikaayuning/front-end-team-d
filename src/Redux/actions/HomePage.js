import { getMovieReq, getMovieSuccess, getMovieError, GET_MOVIE_GENRE, getMovieGenre } from '../types/HomePage';
import axios from 'axios';
import { movieUrl, nowPlaying, genreListUrl, moviebyGenreUrl } from '../../Utils/constants';

export const getMovies = () => {
    return (dispatch) => {
      dispatch(getMovieReq);
      return axios.get(`${movieUrl}${nowPlaying}`)
      .then(response => {
        const movies = response.data.results
        dispatch(getMovieSuccess(movies))          
      })
      .catch((error) => {
        const errorMessage = error.message
        dispatch(getMovieError(errorMessage))
      })
    };
  };

export const getGenreList = () => {
  return (dispatch) => {
    return axios
      .get(`${genreListUrl}`)
      .then((res) => {
        dispatch({
          type: GET_MOVIE_GENRE,
          payload: res.data.genres,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getMovieByGenre = (id) => {
    return (dispatch) => {
      dispatch(getMovieGenre);
      return axios.get(`${moviebyGenreUrl}${id}`)
      .then(response => {
        const moviesGenre = response.data.results
        dispatch(getMovieSuccess(moviesGenre, {currentGenre: id}))          
      })
      .catch((error) => {
        const errorMessage = error.message
        dispatch(getMovieError(errorMessage))
      })
    };
  };


