import {createStore} from 'redux';
import toggleFavorite from 'reducers/favoriteReducers';

export default createStore(toggleFavorite);
