import { types } from "./types";

export const initialState = {
    theme: "light",
    menuVisible: false,
    formVisible: { date: undefined, time: undefined, activity: [] },
    cookiesVisibility: false,
    language: localStorage.language ? localStorage.language : "en",
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case `${types.SET_DARK_THEME}`:
        case `${types.SET_LIGHT_THEME}`:
            return {
                ...state,
                theme: action.payload,
            };

        case `${types.HANDLE_MENU}`:
            return {
                ...state,
                menuVisible: action.payload,
            };
        case `${types.SET_LANGUAGE}`:
            return {
                ...state,
                language: action.payload,
            };

        case `${types.SET_COOKIES_VISIBILITY}`:
            return {
                ...state,
                cookiesVisibility: action.payload,
            };

        case `${types.HANDLE_FORM}`:
            return {
                ...state,
                formVisible: action.payload,
            };
        default:
            return state
    }
}