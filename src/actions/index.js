import axios from 'axios';


// Home con Películas Populares
export function populares() {
    return async function (dispatch) {
        const json = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
            params: {
                api_key: '1e40352e4ee54a4b38c2efc103a08b2b',
                language: 'en-US',
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
// https://api.themoviedb.org/3/search/movie?api_key=1e40352e4ee54a4b38c2efc103a08b2b&query=%27memory%27
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

// https://api.themoviedb.org/3/movie/990640?api_key=1e40352e4ee54a4b38c2efc103a08b2b
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

// Home con Películas Populares
export function todasFiltro() {
    return async function (dispatch) { 
        const json = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
            params: {
                api_key: '1e40352e4ee54a4b38c2efc103a08b2b',
                sort_by: 'release_date.asc',
                page: 5
            }
        });
        return dispatch({
            type: 'TODAS_FILTRO',
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



// var json = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`, {});