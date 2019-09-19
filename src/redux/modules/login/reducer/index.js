import {types} from './../types'

const initState = {
  res: JSON.parse(localStorage.getItem('userInfo')) || { token: null},
  isRequest: false
};
const reducer = (state= initState, action) => {
    switch (action.type) {
        case types.FETCH_LOGIN_REQUEST:
            return {
                ...state,
                isRequest: true
            };
        case types.FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                res: action.result.data,
                isRequest: false
            };
        case types.FETCH_LOGIN_FAILURE:
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
export default reducer;
