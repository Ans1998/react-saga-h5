import {types} from './../types'

export const actions = {
    requestLogin: (data) => {
        return {
            type: types.FETCH_LOGIN_REQUEST,
            isRequest: true,
            payload: data
        }
    }
};
