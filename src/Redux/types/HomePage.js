export const GET_MOVIE_REQUEST = 'GET_MOVIE_REQUEST';
export const GET_MOVIE_ERROR = 'GET_MOVIE_ERROR';
export const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
export const GET_MOVIE_GENRE = 'GET_MOVIE_GENRE';
export const GET_BY_GENRE = 'GET_BY_GENRE';
export const GET_DETAIL_MOVIE = 'GET_DETAIL_MOVIE';


export const getMovieReq = () => {
    return {
        type: GET_MOVIE_REQUEST
    }
}

export const getMovieError = () => {
    return {
        type: GET_MOVIE_ERROR
    }
}

export const getMovieSuccess = (payload) => {
    return {
        type: GET_MOVIE_SUCCESS,
        payload,
    }
}

export const getList = (payload) => {
    return {
        type: GET_MOVIE_GENRE,
        payload,
    }
}

export const getMovieGenre = (payload) => {
    return {
        type: GET_BY_GENRE,
        payload,
    }
}

export const getDetailMovie = (payload) => {
    return {
        type: GET_DETAIL_MOVIE,
        payload,
    }
}