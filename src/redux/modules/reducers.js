import {combineReducers} from 'redux'
import home from './home/reducer'
import login from './login/reducer'
import my from './my/reducer'
// 合并领域状态
const rootReducer = combineReducers({
    my,
    login,
    home
});

export default rootReducer
