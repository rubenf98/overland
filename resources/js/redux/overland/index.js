import { types } from "./types";

export const initialState = {
    data: [],
    relevantData: {
        today: [],
        next: []
    },
    dataArchive: [],
    dataPerMonth: [],
    loading: false,
    loadingDownload: false,
    meta: {},
    metaArchive: {},
    current: {},
    values: {},
    errors: [],
    loadingExport: false,
    change: 0,
    simulatedPrice: undefined,
    card: {},
    paymentDetails: {},
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.EXPORT_OVERLAND_CSV}_PENDING`:
            return {
                ...state,
                loadingExport: true
            };

        case `${types.EXPORT_OVERLAND_CSV}_REJECTED`:
        case `${types.EXPORT_OVERLAND_CSV}_FULFILLED`:
            return {
                ...state,
                loadingExport: false
            };

        case `${types.SIMUGET_PAYMENT_DETAILSLATE_PRICE}_FULFILLED`:
            return {
                ...state,
                paymentDetails: action.payload.data,
            };

        case `${types.FETCH_CARD}_PENDING`:
        case `${types.GET_CARD}_PENDING`:
        case `${types.DELETE_OVERLAND}_PENDING`:
        case `${types.CONFIRM_OVERLAND}_PENDING`:
        case `${types.ERROR_OVERLAND}_PENDING`:
        case `${types.UPDATE_OVERLAND}_PENDING`:
        case `${types.UPDATE_OVERLAND_STATUS}_PENDING`:
        case `${types.UPDATE_OVERLAND_PAYMENT}_PENDING`:
        case `${types.CREATE_OVERLAND}_PENDING`:
        case `${types.CREATE_EXTERNAL_OVERLAND}_PENDING`:
        case `${types.FETCH_OVERLANDS}_PENDING`:
        case `${types.FETCH_RELEVANT_OVERLANDS}_PENDING`:
        case `${types.FETCH_OVERLAND}_PENDING`:
        case `${types.FETCH_OVERLANDS_PER_MONTH}_PENDING`:
        case `${types.FETCH_OVERLANDS_ARCHIVE}_PENDING`:
        case `${types.SIMULATE_PRICE}_PENDING`:

            return {
                ...state,
                loading: true,
            };

        case `${types.FETCH_CARD}_REJECTED`:
        case `${types.GET_CARD}_REJECTED`:
        case `${types.GET_CARD}_FULFILLED`:
        case `${types.UPDATE_OVERLAND}_REJECTED`:
        case `${types.UPDATE_OVERLAND_STATUS}_REJECTED`:
        case `${types.UPDATE_OVERLAND_PAYMENT}_REJECTED`:
        case `${types.DELETE_OVERLAND}_REJECTED`:
        case `${types.CREATE_OVERLAND}_REJECTED`:
        case `${types.CREATE_EXTERNAL_OVERLAND}_REJECTED`:
        case `${types.CONFIRM_OVERLAND}_REJECTED`:
        case `${types.ERROR_OVERLAND}_REJECTED`:
        case `${types.ERROR_OVERLAND}_FULFILLED`:
        case `${types.FETCH_OVERLANDS_ARCHIVE}_REJECTED`:
        case `${types.CONFIRM_OVERLAND}_FULFILLED`:
        case `${types.SIMULATE_PRICE}_REJECTED`:
            return {
                ...state,
                loading: false,
            };

        case `${types.SIMULATE_PRICE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                simulatedPrice: action.payload.data,
            };

        case `${types.FETCH_CARD}_FULFILLED`:
            return {
                ...state,
                loading: false,
                card: action.payload.data.data,
            };

        case `${types.CREATE_EXTERNAL_OVERLAND}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload.data.data],
                change: state.change + 1
            };

        case `${types.CREATE_OVERLAND}_FULFILLED`:
            return {
                ...state,
                loading: false,
                current: {},
                values: {},
                errors: [],
            };



        case `${types.DELETE_OVERLAND}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.filter(
                    record => record.id !== action.meta.id
                ),
                change: state.change + 1
            };

        case `${types.UPDATE_OVERLAND_STATUS}_FULFILLED`:
        case `${types.UPDATE_OVERLAND_PAYMENT}_FULFILLED`:
        case `${types.UPDATE_OVERLAND}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: state.data.map(
                    (record) =>
                        record.id === action.payload.data.data.id
                            ? action.payload.data.data
                            : record
                ),
                change: state.change + 1
            };

        case `${types.FETCH_OVERLAND}_REJECTED`:
            return {
                ...state,
                loading: false,
                current: {},
            };

        case `${types.FETCH_OVERLANDS_PER_MONTH}_REJECTED`:
            return {
                ...state,
                loading: false,
                dataPerMonth: []
            };

        case `${types.FETCH_RELEVANT_OVERLANDS}_REJECTED`:
            return {
                ...state,
                loading: false,
                relevantData: {
                    today: [],
                    next: []
                },
            };


        case `${types.FETCH_OVERLANDS}_REJECTED`:
            return {
                ...state,
                loading: false,
                data: []
            };

        case `${types.FETCH_OVERLANDS_ARCHIVE}_FULFILLED`:
            return {
                ...state,
                loading: false,
                dataArchive: action.payload.data.data,
                metaArchive: action.payload.data.meta,
            };

        case `${types.FETCH_OVERLANDS_PER_MONTH}_FULFILLED`:
            return {
                ...state,
                loading: false,
                dataPerMonth: action.payload.data.data,
            };

        case `${types.FETCH_OVERLAND}_FULFILLED`:
            return {
                ...state,
                loading: false,
                current: action.payload.data.data,
            };

        case `${types.FETCH_RELEVANT_OVERLANDS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                relevantData: action.payload.data,
            };

        case `${types.FETCH_OVERLANDS}_FULFILLED`:
            return {
                ...state,
                loading: false,
                data: action.payload.data.data,
                meta: action.payload.data.meta,
            };

        case `${types.SET_CURRENT_OVERLAND}`:
            return {
                ...state,
                loading: false,
                current: action.payload,
            };

        case `${types.SET_CURRENT_OVERLAND_VALUES}`:
            return {
                ...state,
                loading: false,
                values: action.payload,
                errors: []
            };

        case `${types.SET_CURRENT_ERRORS}`:
            return {
                ...state,
                loading: false,
                errors: action.payload,
            };
        case `${types.DOWNLOAD_INVOICE}_PENDING`:
        case `${types.DOWNLOAD_CONTRACT}_PENDING`:
            return {
                ...state,
                loadingDownload: true,
            };

        case `${types.DOWNLOAD_INVOICE}_REJECTED`:
        case `${types.DOWNLOAD_INVOICE}_FULFILLED`:
        case `${types.DOWNLOAD_CONTRACT}_REJECTED`:
        case `${types.DOWNLOAD_CONTRACT}_FULFILLED`:
            return {
                ...state,
                loadingDownload: false,
            };
        case `${types.SET_CARD}`:
            return {
                ...state,
                card: action.payload,
            };


        default:
            return state
    }
}