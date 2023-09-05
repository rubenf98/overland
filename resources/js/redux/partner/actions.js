import queryString from "query-string";
import { types } from "./types";
import axios from "axios";

export const fetchPartners = (page = 1, filters = {}) => ({
    type: types.FETCH_PARTNERS,
    payload: axios.get(`${window.location.origin}/api/partners?${queryString.stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
})

export const fetchPartnerSelector = (filters = {}) => ({
    type: types.FETCH_PARTNER_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/partners?${queryString.stringify(filters, {
        arrayFormat: "index"
    })}`)
})

export const fetchPartner = (id) => ({
    type: types.FETCH_PARTNER,
    payload: axios.get(`${window.location.origin}/api/partners/${id}`)
})

export const deletePartner = id => ({
    type: types.DELETE_PARTNER,
    payload: axios.delete(`${window.location.origin}/api/partners/${id}`),
    meta: { id }
});

export const updatePartner = (id, data) => ({
    type: types.UPDATE_PARTNER,
    payload: axios.post(`${window.location.origin}/api/partners/${id}`, data),
});

export const createPartner = (data) => ({
    type: types.CREATE_PARTNER,
    payload: axios.post(`${window.location.origin}/api/partners`, data),
});

export const setPartnerStatus = (id, status) => ({
    type: types.SET_PARTNER_STATUS,
    payload: axios.put(`${window.location.origin}/api/activity-status/${id}`, status),
});


export const setCurrentPartner = (data = []) => ({
    type: types.SET_CURRENT_PARTNER,
    payload: data,
});