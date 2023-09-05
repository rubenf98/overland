import { types } from "./types";

export const initialState = {
    data: [],
    selector: [],
    loading: false,
    current: {},
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.DELETE_PARTNER}_PENDING`:
        case `${types.UPDATE_PARTNER}_PENDING`:
        case `${types.FETCH_PARTNERS}_PENDING`:
        case `${types.FETCH_PARTNER}_PENDING`:
        case `${types.SET_PARTNER_STATUS}_PENDING`:
        case `${types.CREATE_PARTNER}_PENDING`:
        case `${types.FETCH_PARTNER_SELECTOR}_PENDING`:
            return {
                ...state,
                loading: true,
            };

        case `${types.CREATE_PARTNER}_REJECTED`:
        case `${types.UPDATE_PARTNER}_REJECTED`:
        case `${types.DELETE_PARTNER}_REJECTED`:
        case `${types.SET_PARTNER_STATUS}_REJECTED`:
        case `${types.FETCH_PARTNER_SELECTOR}_REJECTED`:
            return {
                ...state,
                loading: false,
            };

        case `${types.FETCH_PARTNER_SELECTOR}_FULFILLED`:
            return {
                ...state,
                loading: false,
                selector: action.payload.data.data,
            };

        case `${types.CREATE_PARTNER}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload.data.data]
            };

        case `${types.DELETE_PARTNER}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.filter(
                    record => record.id !== action.meta.id
                )
            };

        case `${types.UPDATE_PARTNER}_FULFILLED`:
        case `${types.SET_PARTNER_STATUS}_FULFILLED`:
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

        case `${types.FETCH_PARTNER}_REJECTED`:
            return {
                ...state,
                loading: false,
                current: {},
            };
        case `${types.FETCH_PARTNERS}_REJECTED`:
            return {
                ...state,
                loading: false,
                data: [],
                meta: {}
            };
        case `${types.FETCH_PARTNER}_FULFILLED`:
            return {
                ...state,
                loading: false,
                current: action.payload.data.data,
            };

        case `${types.FETCH_PARTNERS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
                meta: action.payload.data.meta,
            };

        case `${types.SET_CURRENT_PARTNER}`:
            return {
                ...state,
                loading: false,
                current: action.payload,
            };

        default:
            return state
    }
}