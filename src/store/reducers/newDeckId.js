import { ADD_DECK, RESET_NEW_DECK_ID  } from '../actions/decks';


export default function newDeckId (state = {}, action) {
    switch(action.type){
        case ADD_DECK :
            const { deck } = action; 
            return {
                ...state,
                newDeckId: deck.id
            }
        case RESET_NEW_DECK_ID:
            return {
                ...state,
                newDeckId: null,
            }
        default :
            return state;
    }
}