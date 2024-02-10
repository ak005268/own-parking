import { http } from '~/services';
import { ForkEffect, put, takeEvery } from 'redux-saga/effects';
import { signUpRequest, signUpSuccess, signUpFail } from './signupSlice';

function* signupSaga(action: ReturnType<typeof signUpRequest>): Generator{

    try{
        const response: any =yield http.post('/auth/register', action?.payload);
        yield put(signUpSuccess(response.data));

    }
    catch(err:any){
        yield put(signUpFail(err?.response?.data?.message));

    }
}

export function* rootsignupSaga(): Generator<ForkEffect<never>, void, unknown>{
    yield takeEvery(signUpRequest, signupSaga);
}