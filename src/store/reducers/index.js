import { combineReducers } from 'redux';
import decks from './decks';
import newDeckId from './newDeckId';

export default combineReducers({
    decks,
    newDeckId
});