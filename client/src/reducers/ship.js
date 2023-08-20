import { GET_SHIPS, GET_FILTERED_SHIPS, GET_TYPES } from '../actions/types.js';

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
            return {...state, ships: payload};
        case GET_FILTERED_SHIPS:
            return {...state, ships: payload};
        case GET_TYPES:
            return {...state, type: payload, loading: false};
        default:
            return state;
    }
}
