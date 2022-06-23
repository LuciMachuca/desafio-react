const initialState = {
    homeList: [],
    allMovies: [],
    detail: {}
}

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case 'POPULARES':
            return {
                ...state,
                homeList: action.payload.results
            };

        case 'BUSQUEDA':
            return {
                ...state,
                homeList: action.payload.results
            }

        case "DETALLE":
            return {
                ...state,
                detail: action.payload
            }

            case "TODAS_FILTRO":
            return {
                ...state,
                allMovies: action.payload.results
            }

        case 'FILTRADO': 

        let filtrados = []
        if (action.payload === '1') filtrados = state.allMovies.filter(mov => mov.vote_average <= 2)
        if (action.payload === '2') filtrados = state.allMovies.filter(mov => mov.vote_average <= 4)
        if (action.payload === '3') filtrados = state.allMovies.filter(mov => mov.vote_average <= 6)
        if (action.payload === '4') filtrados = state.allMovies.filter(mov => mov.vote_average <= 8)
        else if (action.payload === '5') filtrados = state.allMovies.filter(mov => mov.vote_average <= 10)
        else filtrados = state.homeList

            return {
                ...state,
                homeList: filtrados
            }

        default:
            return state;
    }
}

export default rootReducer;    