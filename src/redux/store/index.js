import {createStore, applyMiddleware} from 'redux' // 处理中间件要用applyMiddleware
import createSaga from 'redux-saga'

import rootReducer from '../modules/reducers'

// import testSaga,{requestToe} from "../modules/test/saga";
import {requestCommonUseDevices, requestSlides} from '../modules/home/saga'
import {requestLogin} from '../modules/login/saga'
import {requestMyinfo} from '../modules/my/saga'
let saga = createSaga();
let store;

// 测试环境 && redux-tools有安装
if (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    store = createStore(rootReducer, composeEnhancers(applyMiddleware(saga)))
} else {
    store = createStore(rootReducer, applyMiddleware(saga)) // 将中间件传入
}
// saga.run(testSaga);
// saga.run(requestToe);

saga.run(requestSlides);
saga.run(requestCommonUseDevices);
saga.run(requestLogin);
saga.run(requestMyinfo);

export default store
