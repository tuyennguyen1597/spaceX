import axios from 'axios';

import {
    GET_SHIPS, GET_FILTERED_SHIPS, GET_TYPES
} from './types';

//Get all profiles
export const getShips = () => async (dispatch) => {

    try {
        const res = await axios.get('http://localhost:3001/api/ships');

        dispatch({
            type: GET_SHIPS,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: "SHIPS_ERROR",
            payload: { msg: err.response.statusText, status: err.response.status },
        });
    }
};

export const getShipTypes = () => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:3001/api/ships/types');

        console.log(res)

        dispatch({
            type: GET_TYPES,
            payload: res.data,
        });
    } catch (err) {
        dispatch({
            type: "SHIPS_ERROR",
            payload: err,
        });
    }
};

export const getFilteredShips = (filteredData) => async (
    dispatch
) => {
    try {
        const config = {
            header: {
                'Content-Type': 'application/json',
            },
        };

        const res = await axios.get('http://localhost:3001/api/ship', {params: filteredData} , config);

        console.log(res)
        dispatch({
            type: GET_FILTERED_SHIPS,
            payload: res.data,
        });

    } catch (err) {
        console.error(err.response);

        dispatch({
            type: "PROFILE_ERROR",
            payload: { msg: err.response.statusText, status: err.response.status },
        });
    }
};

