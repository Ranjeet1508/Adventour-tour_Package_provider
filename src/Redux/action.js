import { ISAUTH, USER } from "./actiontype"


export const handleAuth = (payload) => {
    return {type : ISAUTH, payload}
}

export const handleUser = (payload) => {
    return {type: USER, payload}
}