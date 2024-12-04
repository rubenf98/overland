import { types } from "./types";

export const initialState = {
    data: [],
    highlightedData: [],
    levadas: [],
    tours: [],
    safaries: [],
    selector: [],
    loading: false,
    current: {},
    activityAvailable: false,
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.DELETE_ACTIVITY}_PENDING`:
        case `${types.UPDATE_ACTIVITY}_PENDING`:
        case `${types.FETCH_ACTIVITIES}_PENDING`:
        case `${types.FETCH_ACTIVITY}_PENDING`:
        case `${types.SET_ACTIVITY_STATUS}_PENDING`:
        case `${types.CREATE_ACTIVITY}_PENDING`:
        case `${types.FETCH_ACTIVITY_SELECTOR}_PENDING`:
        case `${types.FETCH_LEVADAS}_PENDING`:
        case `${types.FETCH_TOURS}_PENDING`:
        case `${types.FETCH_HIGHLIGHTED_ACTIVITIES}_PENDING`:
        case `${types.FETCH_HIGHLIGHTED_ACTIVITIES}_REJECTED`:
        case `${types.FETCH_SAFARIES}_REJECTED`:
            return {
                ...state,
                loading: true,
            };

        case `${types.FETCH_HIGHLIGHTED_ACTIVITIES}_FULFILLED`:
            return {
                ...state,
                loading: false,
                highlightedData: action.payload.data.data,
            };

        case `${types.IS_ACTIVITY_AVAILABLE}_PENDING`:
            return {
                ...state,
                activityAvailable: false,
                loading: true,
            };

        case `${types.CREATE_ACTIVITY}_REJECTED`:
        case `${types.UPDATE_ACTIVITY}_REJECTED`:
        case `${types.DELETE_ACTIVITY}_REJECTED`:
        case `${types.SET_ACTIVITY_STATUS}_REJECTED`:
        case `${types.FETCH_ACTIVITY_SELECTOR}_REJECTED`:
        case `${types.FETCH_LEVADAS}_REJECTED`:
        case `${types.FETCH_TOURS}_REJECTED`:
        case `${types.FETCH_SAFARIES}_REJECTED`:

        case `${types.IS_ACTIVITY_AVAILABLE}_PENDING`:
            return {
                ...state,
                loading: false,
            };

        case `${types.IS_ACTIVITY_AVAILABLE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                activityAvailable: action.payload.data,
            };


        case `${types.FETCH_SAFARIES}_FULFILLED`:
            return {
                ...state,
                loading: false,
                safaries: action.payload.data.data,
            };
        case `${types.FETCH_LEVADAS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                levadas: action.payload.data.data,
            };
        case `${types.FETCH_TOURS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                tours: action.payload.data.data,
            };

        case `${types.FETCH_ACTIVITY_SELECTOR}_FULFILLED`:
            return {
                ...state,
                loading: false,
                selector: action.payload.data.data,
            };

        case `${types.CREATE_ACTIVITY}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload.data.data]
            };

        case `${types.DELETE_ACTIVITY}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.filter(
                    record => record.id !== action.meta.id
                )
            };

        case `${types.UPDATE_ACTIVITY}_FULFILLED`:
        case `${types.SET_ACTIVITY_STATUS}_FULFILLED`:
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

        case `${types.FETCH_ACTIVITY}_REJECTED`:
            return {
                ...state,
                loading: false,
                current: {},
            };
        case `${types.FETCH_ACTIVITIES}_REJECTED`:
            return {
                ...state,
                loading: false,
                data: [],
                meta: {}
            };
        case `${types.FETCH_ACTIVITY}_FULFILLED`:
            return {
                ...state,
                loading: false,
                current: action.payload.data.data,
            };

        case `${types.FETCH_ACTIVITIES}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
                meta: action.payload.data.meta,
            };

        case `${types.SET_CURRENT_ACTIVITY}`:
            return {
                ...state,
                loading: false,
                current: action.payload,
            };

        default:
            return state
    }
}