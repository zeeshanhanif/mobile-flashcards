import { getDecks, saveDeckTitle, saveCardToDeck, removeDeck  } from "../../utils/api";

export const GET_ALL_DECKS = "GET_ALL_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";
export const DELETE_DECK = "DELETE_DECK";
export const RESET_NEW_DECK_ID = "RESET_NEW_DECK_ID";

export function handleGetAllDecks(){
    return (dispatch) => {
        return getDecks()
        .then((decks) => {
            dispatch(getAllDecks(decks));
        })
    }
}

export function handleAddDecks(deckTitle){
    return (dispatch) => {
        return saveDeckTitle(deckTitle)
        .then((deck) => {
            dispatch(addDeck(deck));
        })
    }
}

export function handleAddCardToDeck(deckId, card){
    return (dispatch) => {
        return saveCardToDeck(deckId, card)
        .then(() => {
            dispatch(addCardToDeck(deckId, card));
        })
    }
}

export function handleDeleteDeck(deckId){
    return (dispatch) => {
        return removeDeck(deckId)
        .then(() => {
            dispatch(deleteDeck(deckId));
        })
    }
}

export function getAllDecks (decks) {
    return {
        type: GET_ALL_DECKS,
        decks
    }
}

export function addDeck (deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function addCardToDeck (deckId, card) {
    return {
        type: ADD_CARD_TO_DECK,
        deckId,
        card
    }
}

export function deleteDeck (deckId) {
    return {
        type: DELETE_DECK,
        deckId,
    }
}

export function resetNewDeckId () {
    return {
        type: RESET_NEW_DECK_ID
    }
}