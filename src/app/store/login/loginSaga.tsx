import { http } from '~/services';
import { loginFail, loginRequest, loginSuccess } from './loginSlice';
import { ForkEffect, put, takeEvery } from 'redux-saga/effects';
import { useNavigate } from 'react-router-dom';

function* loginSaga(action: ReturnType<typeof loginRequest>): Generator{

    try{
        const response: any =yield http.post('/auth/login', action?.payload);
        yield put(loginSuccess(response.data));
        // const navigate=useNavigate();
        // navigate('/dashboard');

    }
    catch(err:any){
        yield put(loginFail(err?.response?.data?.message));

    }
}

export function* rootLoginSaga(): Generator<ForkEffect<never>, void, unknown>{
    yield takeEvery(loginRequest, loginSaga);
}