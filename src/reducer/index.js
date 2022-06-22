const initialState = {
    homeList: [],
    listMovies: [],
    search: [],
    detail: {},
    filterMovies: []
}

function rootReducer(state = initialState, action) {

    switch (action.type) {
        case 'GET_HOME':
            return {
                ...state,
                homeList: action.payload.results,
                listMovies: action.payload.results
            };

        case 'SEARCH_MOVIE':
            return {
                ...state,
                search: action.payload
            }

        case "GET_DETAIL":
            return {
                ...state,
                detail: action.payload
            }

        case 'FILTERED': // el valor del select es lo q le llega a mi acción x payload
            const vote = action.payload === '4' ? state.listMovies : state.listMovies.filter(mov => mov.vote_average.includes(action.payload))
            return {
                ...state,
                filterMovies: vote
            }

        default:
            return state;
    }
}

export default rootReducer;    