const initialState = { favoriteFilms: []};

function toggleFavorite(state = initialState, action){
    let nextState;

    switch (action.type) {
        case 'TOOGLE_FAVORITE':
            const favoriteFilmIndex = state.favoriteFilms.findIndex(item => item.id === action.value.id);
            if(favoriteFilmIndex !== -1){
                // suppresion
                nextState = {
                    ...state,
                    favoriteFilms: state.favoriteFilms.filter((item, index) => index !== favoriteFilmIndex)
                }
            } else {
                // add film to favorites
                nextState = {
                    ...state,
                    favoriteFilms: [...state.favoriteFilms, action.value]
                }
            }
            return nextState || state;
        default:
            return nextState;
    }

}

export default toggleFavorite;
