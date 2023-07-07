import * as types from './signupActionTypes';

export const handleAdd = (payload) => {
    return {type : types.ADD_USER, payload}
}

/* export const handleFetch = () => {
    return {type : types.FETCH_USER}
} */