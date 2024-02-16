import queryString from "query-string";
import { types } from "./types";
import axios from "axios";

export const fetchVehicles = (page = 1, filters = {}) => ({
    type: types.FETCH_VEHICLES,
    payload: axios.get(`${window.location.origin}/api/vehicles?${queryString.stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
})

export const fetchVehicleSelector = (filters = {}) => ({
    type: types.FETCH_VEHICLE_SELECTOR,
    payload: axios.get(`${window.location.origin}/api/selector/vehicles?${queryString.stringify(filters, {
        arrayFormat: "index"
    })}`)
})

export const fetchDisabledDates = (filters = {}) => ({
    type: types.FETCH_DISABLED_DATES,
    payload: axios.get(`${window.location.origin}/api/is-vehicle-available?${queryString.stringify(filters, {
        arrayFormat: "index"
    })}`)
})

export const fetchVehicle = (id) => ({
    type: types.FETCH_VEHICLE,
    payload: axios.get(`${window.location.origin}/api/vehicles/${id}`)
})

export const deleteVehicle = id => ({
    type: types.DELETE_VEHICLE,
    payload: axios.delete(`${window.location.origin}/api/vehicles/${id}`),
    meta: { id }
});

export const updateVehicle = (id, data) => ({
    type: types.UPDATE_VEHICLE,
    payload: axios.post(`${window.location.origin}/api/vehicles/${id}`, data),
});

export const createVehicle = (data) => ({
    type: types.CREATE_VEHICLE,
    payload: axios.post(`${window.location.origin}/api/vehicles`, data),
});

export const setVehicleStatus = (id, status) => ({
    type: types.SET_VEHICLE_STATUS,
    payload: axios.put(`${window.location.origin}/api/vehicle-status/${id}`, status),
});


export const setCurrentVehicle = (data = []) => ({
    type: types.SET_CURRENT_VEHICLE,
    payload: data,
});