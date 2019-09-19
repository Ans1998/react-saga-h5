import {types} from './../types'

export const actions = {
    LoadRequest: (data = {}) => {
        return {
            type: types.FETCH_TEST_REQUEST,
            isRequest: true,
            payload: data
        }
    },
};
