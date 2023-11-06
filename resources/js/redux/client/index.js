import { types } from "./types";

export const initialState = {
    data: [],
    selector: [],
    loading: false,
    current: {},
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.DELETE_CLIENT}_PENDING`:
        case `${types.UPDATE_CLIENT}_PENDING`:
        case `${types.FETCH_CLIENTS}_PENDING`:
        case `${types.FETCH_CLIENT}_PENDING`:
        case `${types.CREATE_CLIENT}_PENDING`:
        case `${types.FETCH_CLIENT_SELECTOR}_PENDING`:
            return {
                ...state,
                loading: true,
            };

        case `${types.CREATE_CLIENT}_REJECTED`:
        case `${types.UPDATE_CLIENT}_REJECTED`:
        case `${types.DELETE_CLIENT}_REJECTED`:
        case `${types.FETCH_CLIENT_SELECTOR}_REJECTED`:
            return {
                ...state,
                loading: false,
            };

        case `${types.FETCH_CLIENT_SELECTOR}_FULFILLED`:
            return {
                ...state,
                loading: false,
                selector: action.payload.data.data,
            };

        case `${types.CREATE_CLIENT}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload.data.data]
            };

        case `${types.DELETE_CLIENT}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.filter(
                    record => record.id !== action.meta.id
                )
            };

        case `${types.UPDATE_CLIENT}_FULFILLED`:
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

        case `${types.FETCH_CLIENT}_REJECTED`:
            return {
                ...state,
                loading: false,
                current: {},
            };
        case `${types.FETCH_CLIENTS}_REJECTED`:
            return {
                ...state,
                loading: false,
                data: [],
                meta: {}
            };
        case `${types.FETCH_CLIENT}_FULFILLED`:
            return {
                ...state,
                loading: false,
                current: action.payload.data.data,
            };

        case `${types.FETCH_CLIENTS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
                meta: action.payload.data.meta,
            };

        case `${types.SET_CURRENT_CLIENT}`:
            return {
                ...state,
                loading: false,
                current: action.payload,
            };

        default:
            return state
    }
}