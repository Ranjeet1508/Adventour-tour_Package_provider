import * as types from './signupActionTypes';

const initState = {
    allUsers : []
}

const signupReducer = (state = initState, {type, payload}) => {
    switch(type){
        case types.ADD_USER : {
            return {...state, allUsers : [...state.allUsers, payload]}
        }
        case types.SET_USER : {
            return {...state, allUsers : payload}
        }
        default : {
            return state
        }
    } 
}

export { signupReducer };