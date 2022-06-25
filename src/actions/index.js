import axios from 'axios';


// 20 Películas Populares
export function populares() {
    return async function (dispatch) {
        const json = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
            params: {
                api_key: '1e40352e4ee54a4b38c2efc103a08b2b',
                sort_by: 'popularity.desc'
            }
        });
        return dispatch({
            type: 'POPULARES',
            payload: json.data
        })
    }
}

// Barra de Búsqueda
export function busqueda(movie) {
    return async function (dispatch) {
        var json = await axios.get('https://api.themoviedb.org/3/search/movie', {
            params: {
                api_key: '1e40352e4ee54a4b38c2efc103a08b2b',
                query: movie
            }
        });
        return dispatch({
            type: 'BUSQUEDA',
            payload: json.data
        })

    }
}

export function detalle(id) {
    return async function (dispatch) {

        var json = await axios.get('https://api.themoviedb.org/3/movie/' + id, {
            params: {
                api_key: '1e40352e4ee54a4b38c2efc103a08b2b'
            }
        })
        return dispatch({
            type: "DETALLE",
            payload: json.data
        })
    }
}

// Array de películas random para el filtrado
export function fetchPelis(page) {
    return async function (dispatch) {
        var json = await axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
                api_key: '1e40352e4ee54a4b38c2efc103a08b2b',
                sort_by: 'popularity.desc',
                page: page
            }
        });
        return dispatch({
            type: 'FETCH_PELIS',
            payload: json.data
        })

    }
}

// Filtrado por Clasificación
export function filtrado(payload) {
    return {
        type: 'FILTRADO',
        payload
    }
}

