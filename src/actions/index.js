import axios from 'axios';
const { BASE_API,
    SEARCH_API,
    DISCOVER_API,
    API_KEY,
    IMG_PATH } = process.env;

// Home con Películas Populares
export function getHome() {
    return async function (dispatch) {
        const json = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
            params: {
                api_key: '1e40352e4ee54a4b38c2efc103a08b2b',
                language: 'en-US',
                sort_by: 'popularity.desc'
            }
        });
        return dispatch({
            type: 'GET_HOME',
            payload: json.data
        })
    }
}

// Barra de Búsqueda
// https://api.themoviedb.org/3/search/movie?api_key=1e40352e4ee54a4b38c2efc103a08b2b&query=%27memory%27
export function searchMovie(movie) {
    return async function (dispatch) {
        var json = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: '1e40352e4ee54a4b38c2efc103a08b2b',
                query: movie
            }
        });
        return dispatch({
            type: 'SEARCH_MOVIE',
            payload: json.data
        })

    }
}

// https://api.themoviedb.org/3/movie/990640?api_key=1e40352e4ee54a4b38c2efc103a08b2b
export function getDetail(id) {
    return async function (dispatch) {

        var json = await axios.get('https://api.themoviedb.org/3/movie/' + id, {
            params: {
                api_key: '1e40352e4ee54a4b38c2efc103a08b2b'
            }
        })
        return dispatch({
            type: "GET_DETAIL",
            payload: json.data
        })
    }
}

// Filtrado por Clasificación
export function filtered(payload) {
    return {
        type: 'FILTERED',
        payload
    }
}



// var json = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`, {});