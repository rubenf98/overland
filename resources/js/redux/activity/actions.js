import queryString from "query-string";
import { types } from "./types";
import axios from "axios";

export const fetchActivities = (page = 1, filters = {}) => ({
    type: types.FETCH_ACTIVITIES,
    payload: axios.get(`${window.location.origin}/api/activities?${queryString.stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
})

export const fetchLevadas = (filters = {}) => ({
    type: types.FETCH_LEVADAS,
    payload: axios.get(`${window.location.origin}/api/selector/activities?${queryString.stringify(filters, {
        arrayFormat: "index"
    })}`)
})

export const fetchHighlightedActivities = () => ({
    type: types.FETCH_HIGHLIGHTED_ACTIVITIES,
    payload: axios.get(`${window.location.origin}/api/highlighted-activities`)
})


export const fetchTours = (filters = {}) => ({
    type: types.FETCH_TOURS,
    payload: axios.get(`${window.location.origin}/api/selector/activities?${queryString.stringify(filters, {
        arrayFormat: "index"
    })}`)
})

export const fetchSafaries = (filters = {}) => ({
    type: types.FETCH_SAFARIES,
    payload: axios.get(`${window.location.origin}/api/selector/activities?${queryString.stringify(filters, {
        arrayFormat: "index"
    })}`)
})


export const isActivityAvailable = (filters = {}) => ({
    type: types.IS_ACTIVITY_AVAILABLE,
    payload: axios.get(`${window.location.origin}/api/is-available?${queryString.stringify(filters, {
        arrayFormat: "index"
    })}`)
})


export const fetchActivitySelector = (filters = {}) => ({
    type: types.FETCH_ACTIVITY_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/activities?${queryString.stringify(filters, {
        arrayFormat: "index"
    })}`)
})

export const fetchActivity = (id) => ({
    type: types.FETCH_ACTIVITY,
    payload: axios.get(`${window.location.origin}/api/activities/${id}`)
})

export const deleteActivity = id => ({
    type: types.DELETE_ACTIVITY,
    payload: axios.delete(`${window.location.origin}/api/activities/${id}`),
    meta: { id }
});

export const updateActivity = (id, data) => ({
    type: types.UPDATE_ACTIVITY,
    payload: axios.post(`${window.location.origin}/api/activities/${id}`, data),
});

export const createActivity = (data) => ({
    type: types.CREATE_ACTIVITY,
    payload: axios.post(`${window.location.origin}/api/activities`, data),
});

export const setActivityStatus = (id, status) => ({
    type: types.SET_ACTIVITY_STATUS,
    payload: axios.put(`${window.location.origin}/api/activity-status/${id}`, status),
});


export const setCurrentActivity = (data = []) => ({
    type: types.SET_CURRENT_ACTIVITY,
    payload: data,
});