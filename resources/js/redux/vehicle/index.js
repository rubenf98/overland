import { types } from "./types";

export const initialState = {
    data: [],
    selector: [],
    disabledDates: [],
    loading: false,
    loadingDisabledDates: false,
    current: {},
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.DELETE_VEHICLE}_PENDING`:
        case `${types.UPDATE_VEHICLE}_PENDING`:
        case `${types.FETCH_VEHICLES}_PENDING`:
        case `${types.FETCH_VEHICLE}_PENDING`:
        case `${types.CREATE_VEHICLE}_PENDING`:
        case `${types.FETCH_VEHICLE_SELECTOR}_PENDING`:
        case `${types.SET_VEHICLE_STATUS}_PENDING`:
            return {
                ...state,
                loading: true,
            };

        case `${types.FETCH_DISABLED_DATES}_PENDING`:
            return {
                ...state,
                loadingDisabledDates: true,
                disabledDates: [],
            };

        case `${types.FETCH_DISABLED_DATES}_REJECTED`:
            return {
                ...state,
                loadingDisabledDates: false,
                disabledDates: [],
            };

        case `${types.FETCH_DISABLED_DATES}_FULFILLED`:
            return {
                ...state,
                loadingDisabledDates: false,
                disabledDates: action.payload.data,
            };

        case `${types.CREATE_VEHICLE}_REJECTED`:
        case `${types.UPDATE_VEHICLE}_REJECTED`:
        case `${types.DELETE_VEHICLE}_REJECTED`:
        case `${types.FETCH_VEHICLE_SELECTOR}_REJECTED`:
        case `${types.SET_VEHICLE_STATUS}_REJECTED`:
            return {
                ...state,
                loading: false,
            };

        case `${types.FETCH_VEHICLE_SELECTOR}_FULFILLED`:
            return {
                ...state,
                loading: false,
                selector: action.payload.data.data,
            };

        case `${types.CREATE_VEHICLE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload.data.data]
            };

        case `${types.DELETE_VEHICLE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.filter(
                    record => record.id !== action.meta.id
                )
            };

        case `${types.UPDATE_VEHICLE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.map(
                    (record) =>
                        record.id === action.payload.data.data.id
                            ? action.payload.data.data
                            : record
                )
            };

        case `${types.FETCH_VEHICLE}_REJECTED`:
            return {
                ...state,
                loading: false,
                current: {},
            };
        case `${types.FETCH_VEHICLES}_REJECTED`:
            return {
                ...state,
                loading: false,
                data: [],
                meta: {}
            };
        case `${types.FETCH_VEHICLE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                current: action.payload.data.data,
            };

        case `${types.FETCH_VEHICLES}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
                meta: action.payload.data.meta,
            };

        case `${types.SET_CURRENT_VEHICLE}`:
            return {
                ...state,
                loading: false,
                current: action.payload,
            };

        case `${types.SET_VEHICLE_STATUS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.map(
                    (record) =>
                        record.id === action.payload.data.data.id
                            ? action.payload.data.data
                            : record
                )
            };

        default:
            return state
    }
}