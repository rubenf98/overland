import { types } from "./types";
import axios from "axios";

export const fetchCharateristics = () => ({
    type: types.FETCH_CHARATERISTICS,
    payload: axios.get(`${window.location.origin}/api/charateristics`)
})

export const fetchCharateristic = (id) => ({
    type: types.FETCH_CHARATERISTIC,
    payload: axios.get(`${window.location.origin}/api/charateristics/${id}`)
})

export const deleteCharateristic = id => ({
    type: types.DELETE_CHARATERISTIC,
    payload: axios.delete(`${window.location.origin}/api/charateristics/${id}`),
    meta: { id }
});

export const updateCharateristic = (id, data) => ({
    type: types.UPDATE_CHARATERISTIC,
    payload: axios.put(`${window.location.origin}/api/charateristics/${id}`, data),
});

export const createCharateristic = (data) => ({
    type: types.CREATE_CHARATERISTIC,
    payload: axios.post(`${window.location.origin}/api/charateristics`, data),
});


export const setCurrentCharateristic = (data = []) => ({
    type: types.SET_CURRENT_CHARATERISTIC,
    payload: data,
});