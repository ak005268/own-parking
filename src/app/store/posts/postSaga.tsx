import { http } from '~/services';
import { getPost } from './postSlices';
import { ForkEffect, takeEvery } from 'redux-saga/effects';

function* dataFetch(action: ReturnType<typeof getPost>): Generator{

    try{
        const response: any =yield http.post('/auth/register', action?.payload);
        console.log('response=>', response);
        // yield put(postAdd(response.data));
    }
    catch(err){
        console.error('err', err);

    }
}

export function* postsSaga(): Generator<ForkEffect<never>, void, unknown>{
    yield takeEvery(getPost, dataFetch);
}