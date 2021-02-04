import {
    GET_MOVIE_REQUEST,
    GET_MOVIE_ERROR,
    GET_MOVIE_SUCCESS,
    GET_MOVIE_GENRE,
    GET_BY_GENRE,
    GET_DETAIL_MOVIE, GET_REVIEW_MOVIE
} from "../types/HomePage";

let initialState = {
    movies: [],
    isLoading: false,
    isError: false,
    genres: [],
    id: 0,
    movie: [],
};

const homePageReducer = (state = initialState, action) => {
    if (action.type === GET_MOVIE_REQUEST) {
        return {
            ...state,
            isLoading: true,
            isError: false,
        };
    }
    if (action.type === GET_MOVIE_SUCCESS) {
        return {
            ...state,
            isLoading: false,
            isError: false,
            movies: action.payload,
        };
    }
    if (action.type === GET_MOVIE_ERROR) {
        return {
            ...state,
            isLoading: false,
            isError: true,
        };
    }
    if (action.type === GET_MOVIE_GENRE) {
        return {
            ...state,
            genres: action.payload,
        };
    }
    if (action.type === GET_BY_GENRE) {
        return {
            ...state,
            movies: action.payload,
            id: action.payload,
        };
    }
    if (action.type === GET_DETAIL_MOVIE) {
        return {
            ...state,
            movie: action.payload,
        };
    }

    if (action.type === GET_REVIEW_MOVIE) {
        return {
            ...state,
            review: action.payload,
        };
    }
    return state;
};

export default homePageReducer;
