import { types } from "./types";

export const initialState = {
    data: [],
    selector: [],
    loading: false,
    current: {},
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.DELETE_COUNCIL}_PENDING`:
        case `${types.UPDATE_COUNCIL}_PENDING`:
        case `${types.FETCH_COUNCILS}_PENDING`:
        case `${types.FETCH_COUNCIL}_PENDING`:
        case `${types.CREATE_COUNCIL}_PENDING`:
        case `${types.FETCH_COUNCIL_SELECTOR}_PENDING`:
            return {
                ...state,
                loading: true,
            };



        case `${types.CREATE_COUNCIL}_REJECTED`:
        case `${types.UPDATE_COUNCIL}_REJECTED`:
        case `${types.DELETE_COUNCIL}_REJECTED`:
        case `${types.FETCH_COUNCIL_SELECTOR}_REJECTED`:
            return {
                ...state,
                loading: false,
            };

        case `${types.FETCH_COUNCIL_SELECTOR}_FULFILLED`:
            return {
                ...state,
                loading: false,
                selector: action.payload.data.data,
            };

        case `${types.CREATE_COUNCIL}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload.data.data]
            };

        case `${types.DELETE_COUNCIL}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.filter(
                    record => record.id !== action.meta.id
                )
            };

        case `${types.UPDATE_COUNCIL}_FULFILLED`:
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

        case `${types.FETCH_COUNCIL}_REJECTED`:
            return {
                ...state,
                loading: false,
                current: {},
            };
        case `${types.FETCH_COUNCILS}_REJECTED`:
            return {
                ...state,
                loading: false,
                data: [],
                meta: {}
            };
        case `${types.FETCH_COUNCIL}_FULFILLED`:
            return {
                ...state,
                loading: false,
                current: action.payload.data.data,
            };

        case `${types.FETCH_COUNCILS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
                meta: action.payload.data.meta,
            };

        case `${types.SET_CURRENT_COUNCIL}`:
            return {
                ...state,
                loading: false,
                current: action.payload,
            };

        default:
            return state
    }
}