import { types } from "./types";
import axios from "axios";
import queryString from "query-string";
// import { download } from "../../components/helper";

export const fetchOverlands = (page = 1, filters = {}) => ({
    type: types.FETCH_OVERLANDS,
    payload: axios.get(`${window.location.origin}/api/overlands?${queryString.stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
})

export const fetchOverlandsPerMonth = (filters = {}) => ({
    type: types.FETCH_OVERLANDS_PER_MONTH,
    payload: axios.get(`${window.location.origin}/api/overlands-per-month?${queryString.stringify(filters, {
        arrayFormat: "index"
    })}`)
})

export const simulatePrice = (filters = {}) => ({
    type: types.SIMULATE_PRICE,
    payload: axios.get(`${window.location.origin}/api/simulate?${queryString.stringify(filters, {
        arrayFormat: "index"
    })}`)
})

export const fetchOverlandsArchive = (page = 1, filters = {}) => ({
    type: types.FETCH_OVERLANDS_ARCHIVE,
    payload: axios.get(`${window.location.origin}/api/overlands-archive?${queryString.stringify(filters, {
        arrayFormat: "index"
    })}&page=${page}`)
})

export const fetchOverland = (id) => ({
    type: types.FETCH_OVERLAND,
    payload: axios.get(`${window.location.origin}/api/overlands/${id}`)
})

export const deleteOverland = id => ({
    type: types.DELETE_OVERLAND,
    payload: axios.delete(`${window.location.origin}/api/overlands/${id}`),
    meta: { id }
});


export const updateOverlandStatus = (id, data) => ({
    type: types.UPDATE_OVERLAND_STATUS,
    payload: axios.put(`${window.location.origin}/api/update-overland-status/${id}`, data),
});

export const updateOverlandPayment = (id, data) => ({
    type: types.UPDATE_OVERLAND_PAYMENT,
    payload: axios.put(`${window.location.origin}/api/update-overland-payment/${id}`, data),
});

export const updateOverland = (id, data) => ({
    type: types.UPDATE_OVERLAND,
    payload: axios.put(`${window.location.origin}/api/overlands/${id}`, data),
});

export const confirmOverland = (data) => ({
    type: types.CONFIRM_OVERLAND,
    payload: axios.put(`${window.location.origin}/api/confirm/overland`, data),
});

export const errorOverland = (data) => ({
    type: types.ERROR_OVERLAND,
    payload: axios.put(`${window.location.origin}/api/error/overland`, data),
});

export const createOverland = (data) => ({
    type: types.CREATE_OVERLAND,
    payload: axios.post(`${window.location.origin}/api/overlands`, data),
});

export const createExternalOverland = (data) => ({
    type: types.CREATE_EXTERNAL_OVERLAND,
    payload: axios.post(`${window.location.origin}/api/external-overland`, data),
});

// export const exportOverlandCsv = (filters = {}) => ({
//     type: types.EXPORT_OVERLAND_CSV,
//     payload: axios({
//         url: `${window.location.origin}/api/export/overlands?${stringify(filters, {
//             arrayFormat: "index"
//         })}`,
//         method: "GET",
//         responseType: "blob",
//     }).then(
//         response => {
//             download(response, ' reservas.xlsx')
//         },
//         error => {
//             return error.data;
//         }
//     ),
//     meta: { globalError: true }
// });


export const setCurrentOverland = (data) => ({
    type: types.SET_CURRENT_OVERLAND,
    payload: data,
});

export const setCurrentOverlandValues = (data) => ({
    type: types.SET_CURRENT_OVERLAND_VALUES,
    payload: data,
});

export const setCurrentErrors = (data) => ({
    type: types.SET_CURRENT_ERRORS,
    payload: data,
});


export const downloadInvoice = (token, ext = "pdf") => ({
    type: types.DOWNLOAD_INVOICE,
    payload: axios({
        url: `${window.location.origin}/api/download/invoice`,
        data: { token: token },
        method: "POST",
        responseType: "blob",
    }).then(
        response => {
            download(response, token + '.' + ext)
        },
        error => {
            return error.data;
        }
    ),
});

export const downloadContract = (token, ext = "pdf") => ({
    type: types.DOWNLOAD_CONTRACT,
    payload: axios({
        url: `${window.location.origin}/api/download/contract`,
        data: { token: token },
        method: "POST",
        responseType: "blob",
    }).then(
        response => {
            download(response, token + '.' + ext)
        },
        error => {
            return error.data;
        }
    ),
});