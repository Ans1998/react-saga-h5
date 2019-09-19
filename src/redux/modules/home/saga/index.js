// import { delay } from 'redux-saga'
import { call, put, takeEvery, select, take, fork, cancel, cancelled} from 'redux-saga/effects'


import http from '../../../../utils/axios'
import {actions} from "./../action"
import {types} from './../types'
import {home as homeApi} from "./../api"
// 轮播图
export function* requestSlides() {
    while(true) {
        const action = yield take(types.FETCH_SLIDE_REQUEST);
        const result = yield call(http.post, homeApi.getHomeSlide, {});
        yield put({type: types.FETCH_SLIDE_SUCCESS, result});
    }
}
// 常用设备
export function* requestCommonUseDevices() {
    while(true){
        const action = yield take(types.FETCH_DEVICE_REQUEST);
        let form = {
            pageSize: '5',
            is_homepage: 'true'
        };
        const result = yield call(http.post, homeApi.getHomeCommonUseDevice, form );
        yield put({type: types.FETCH_DEVICE_SUCCESS, result});
    }
}

