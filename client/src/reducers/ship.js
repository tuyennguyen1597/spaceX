import { GET_SHIPS, GET_FILTERED_SHIPS } from '../actions/types.js';

/**
 * the initialState is an object including id, msg, and alertType
 */
const initialState = {
    ships: [],
    type: [],
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_SHIPS:
            return [...state, payload];
        case GET_SHIPS:
            return [...state, payload];
        case GET_FILTERED_SHIPS:
            return [...state, payload];
        default:
            return state;
    }
}
