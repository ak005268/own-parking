import { http } from '~/services';
import { branchFail, branchRequest, branchSuccess } from './branchSlice';
import { ForkEffect, put, takeEvery } from 'redux-saga/effects';

function* branchSaga(action:ReturnType<typeof branchRequest>): Generator{

    try{
        const response: any =yield http.post('/branch', action?.payload);
        yield put(branchSuccess(response.data));
    }
    catch(err:any){
        yield put(branchFail(err?.response.data.mas));
    }
}

export function* rootBranchSaga():Generator<ForkEffect<never>, void, unknown>{
    yield takeEvery(branchRequest, branchSaga);
}