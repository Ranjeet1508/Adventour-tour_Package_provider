import * as types from './signupActionTypes';

export const handleAdd = (payload) => {
    return {type : types.ADD_USER, payload}
}

export const handleSetUsers = (payload) => {
    return {type : types.SET_USER, payload}
}