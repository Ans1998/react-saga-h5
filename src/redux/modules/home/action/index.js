import {types} from './../types'

export const actions = {
    requestSlide: () => {
        return {
            type: types.FETCH_SLIDE_REQUEST,
            isRequest: true
        }
    },
    requestCommonUseDevice: () => {
        return {
            type: types.FETCH_DEVICE_REQUEST,
            isRequest: true
        }
    }
};
