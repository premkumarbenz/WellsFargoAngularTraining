import { AppState } from "./state";

const initState: AppState = {
    count: 400,
    isAuthenticated: false,
    message: "Hello NgRx"
};

export const appReducer = (state = initState, action) => {

    if(action.type === "INC_CTR"){
        return {
            ...state,
            count : state.count + 1
        }
    }
    if(action.type === "DECR_CTR"){
        return {
            ...state,
            count : state.count - 1
        }
    }
    if(action.type === "UPD_CTR"){
        return {
            ...state,
            count : action.payload
        }
    }
    if(action.type === "SET_AUTH_FLAG"){
        return {
            ...state,
            isAuthenticated: action.payload
        }
    }

    return state;
}