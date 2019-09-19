import {types} from './../types'
import {combineReducers} from 'redux'

const initState = {
    homeSlide: {
        res: {
            data: {
                useddevice_list: []
            }
        },
        isRequest: false
    },
    homeCommonUseDevice: {
        res: {
            data: {
                ads: []
            }
        },
        isRequest: false
    }
};

// 轮播图
const homeSlideReducer = (state= initState.homeSlide, action) => {
    switch (action.type) {
        case types.FETCH_SLIDE_REQUEST:
            return {
                ...state,
                isRequest: true
            };
        case types.FETCH_SLIDE_SUCCESS:
            return {
                ...state,
                res: action.result,
                isRequest: false
            };
        case types.FETCH_SLIDE_FAIL:
            return {
                ...state,
                isRequest: false
            };
        default:
            return {
                ...state
            };
    }
};
// 常用设备
const homeCommonUseDeviceReducer = (state= initState.homeCommonUseDevice, action) => {
    switch (action.type) {
        case types.FETCH_DEVICE_REQUEST:
            return {
                ...state,
                isRequest: true
            };
        case types.FETCH_DEVICE_SUCCESS:
            return {
                ...state,
                res: action.result,
                isRequest: false
            };
        case types.FETCH_DEVICE_FAIL:
            return {
                ...state,
                isRequest: false
            };
        default:
            return {
                ...state
            };
    }
};
const reducer = combineReducers({
    homeSlideReducer,
    homeCommonUseDeviceReducer
});
export default reducer;
