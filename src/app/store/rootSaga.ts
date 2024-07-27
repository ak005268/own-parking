// sagas.ts
import { AllEffect, ForkEffect, all, fork } from 'redux-saga/effects';
import { exampleSaga } from './example/saga';
import { rootLoginSaga, rootsignupSaga } from '~/store';
import { rootBranchSaga } from './branch/branchSaga';

export function* rootSaga(): Generator<AllEffect<ForkEffect<unknown>>, void, unknown> {
    yield all([fork(exampleSaga)]);
    yield all([fork(rootLoginSaga)]);
    yield all([fork(rootsignupSaga)]);
    yield all([fork(rootBranchSaga)]);
}
