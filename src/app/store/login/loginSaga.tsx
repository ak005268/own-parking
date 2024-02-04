import { http } from '~/services';
import { loginFail, loginRequest, loginSuccess } from './loginSlice';
import { ForkEffect, put, takeEvery } from 'redux-saga/effects';

function* loginSaga(action: ReturnType<typeof loginRequest>): Generator{

    try{
        const response: any =yield http.post('/auth/login', action?.payload);
        yield put(loginSuccess(response.data));
      

    }
    catch(err:any){
        yield put(loginFail(err?.response?.data?.message));

    }
}

export function* rootLoginSaga(): Generator<ForkEffect<never>, void, unknown>{
    yield takeEvery(loginRequest, loginSaga);
}