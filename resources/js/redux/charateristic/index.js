import { types } from "./types";

export const initialState = {
    data: [],
    loading: false,
    current: {},
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.DELETE_CHARATERISTIC}_PENDING`:
        case `${types.UPDATE_CHARATERISTIC}_PENDING`:
        case `${types.FETCH_CHARATERISTICS}_PENDING`:
        case `${types.FETCH_CHARATERISTIC}_PENDING`:
        case `${types.CREATE_CHARATERISTIC}_PENDING`:
            return {
                ...state,
                loading: true,
            };

        case `${types.CREATE_CHARATERISTIC}_REJECTED`:
        case `${types.UPDATE_CHARATERISTIC}_REJECTED`:
        case `${types.DELETE_CHARATERISTIC}_REJECTED`:
            return {
                ...state,
                loading: false,
            };

        case `${types.CREATE_CHARATERISTIC}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload.data.data]
            };

        case `${types.DELETE_CHARATERISTIC}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.filter(
                    record => record.id !== action.meta.id
                )
            };

        case `${types.UPDATE_CHARATERISTIC}_FULFILLED`:
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

        case `${types.FETCH_CHARATERISTIC}_REJECTED`:
            return {
                ...state,
                loading: false,
                current: {},
            };
        case `${types.FETCH_CHARATERISTICS}_REJECTED`:
            return {
                ...state,
                loading: false,
                data: []
            };
        case `${types.FETCH_CHARATERISTIC}_FULFILLED`:
            return {
                ...state,
                loading: false,
                current: action.payload.data.data,
            };

        case `${types.FETCH_CHARATERISTICS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
            };

        case `${types.SET_CURRENT_CHARATERISTIC}`:
            return {
                ...state,
                loading: false,
                current: action.payload,
            };

        default:
            return state
    }
}