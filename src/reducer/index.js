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
                homeList: action.payload.results,
                //allMovies: action.payload.results
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

            filtrados = action.payload == 1 ? state.allMovies.filter(mov => mov.vote_average <= 2) :
                action.payload == 2 ? state.allMovies.filter(mov => mov.vote_average > 2 && mov.vote_average <= 4) :
                    action.payload == 3 ? state.allMovies.filter(mov => mov.vote_average > 4 && mov.vote_average <= 6) :
                        action.payload == 4 ? state.allMovies.filter(mov => mov.vote_average > 6 && mov.vote_average <= 8) :
                            action.payload == 5 ? state.allMovies.filter(mov => mov.vote_average > 8 && mov.vote_average <= 10) :
                                state.homeList

            return {
                ...state,
                homeList: filtrados
            }

        default:
            return state;
    }
}

export default rootReducer;    