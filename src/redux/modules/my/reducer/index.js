import {types} from './../types'

const initState = {
  res: [],
  isRequest: false
};
const reducer = (state= initState, action) => {
    switch (action.type) {
        case types.FETCH_MY_REQUEST:
            return {
                ...state,
                isRequest: true
            };
        case types.FETCH_MY_SUCCESS:
            return {
                ...state,
                res: action.result.data,
                isRequest: false
            };
        case types.FETCH_MY_FAILURE:
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
