// sagas.ts
import { AllEffect, ForkEffect, all, fork } from 'redux-saga/effects';
import { exampleSaga } from './example/saga';
import { postsSaga } from './posts/postSaga';
import { rootLoginSaga } from '~/store';

export function* rootSaga(): Generator<AllEffect<ForkEffect<unknown>>, void, unknown> {
    yield all([fork(exampleSaga)]);
    yield all([fork(postsSaga)]);
    yield all([fork(rootLoginSaga)])
}
