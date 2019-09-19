import { delay, call, put, takeEvery, select, take, fork, cancel, cancelled} from 'redux-saga/effects'

import http from '../../../../utils/axios'
import {actions} from "./../action"
import {types} from './../types'
import {my as myApi} from "./../api"
import {Toast} from 'antd-mobile'

export function* requestMyinfo() {
    while(true){
        const action = yield take(types.FETCH_MY_REQUEST);
        let form = {
            appid: '2018091361332477'
        };
        const result = yield call(http.post, myApi.getMyInfo, form );
        yield put({type: types.FETCH_MY_SUCCESS, result});
    }
}

