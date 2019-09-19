import {types} from './../types'

const initState = {
  res: {},
  isRequest: false
};
const reducer = (state= initState, action) => {
    switch (action.type) {
        case types.FETCH_TEST_REQUEST:
            return {
                ...state,
                isRequest: true
            };
        case types.FETCH_TEST_SUCCESS:
            return {
                ...state,
                res: action.result,
                isRequest: false
            };
        case types.FETCH_TEST_FAILURE:
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
