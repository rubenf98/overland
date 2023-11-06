import queryString from "query-string";
import { types } from "./types";
import axios from "axios";

export const fetchCouncils = (page = 1, filters = {}) => ({
    type: types.FETCH_COUNCILS,
    payload: axios.get(`${window.location.origin}/api/councils?${queryString.stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
})

export const fetchCouncilSelector = (filters = {}) => ({
    type: types.FETCH_COUNCIL_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/councils?${queryString.stringify(filters, {
        arrayFormat: "index"
    })}`)
})

export const fetchCouncil = (id) => ({
    type: types.FETCH_COUNCIL,
    payload: axios.get(`${window.location.origin}/api/councils/${id}`)
})

export const deleteCouncil = id => ({
    type: types.DELETE_COUNCIL,
    payload: axios.delete(`${window.location.origin}/api/councils/${id}`),
    meta: { id }
});

export const updateCouncil = (id, data) => ({
    type: types.UPDATE_COUNCIL,
    payload: axios.put(`${window.location.origin}/api/councils/${id}`, data),
});

export const createCouncil = (data) => ({
    type: types.CREATE_COUNCIL,
    payload: axios.post(`${window.location.origin}/api/councils`, data),
});

export const setCurrentCouncil = (data = []) => ({
    type: types.SET_CURRENT_COUNCIL,
    payload: data,
});