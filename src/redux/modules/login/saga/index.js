import { delay, call, put, takeEvery, select, take, fork, cancel, cancelled} from 'redux-saga/effects'

import http from '../../../../utils/axios'
import {actions} from "./../action"
import {types} from './../types'
import {login as loginApi} from "./../api"
import {Toast} from 'antd-mobile';

export function* requestLogin() {
    while(true) {
        const action = yield take(types.FETCH_LOGIN_REQUEST);
        Toast.loading('正在加载', 0);
        const result = yield call(http.post, loginApi.getLogin, action.payload);
        if (result.status === 'succ') {
            localStorage.setItem('userInfo', JSON.stringify(result.data));
            yield delay(1000);
            Toast.hide();
            Toast.success('登录成功', 2);
        } else {
            yield delay(1000);
            Toast.hide();
            Toast.fail(result.msg, 3);
        }
        yield put({type: types.FETCH_LOGIN_SUCCESS, result});
    }
}


