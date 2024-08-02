// sagas.ts
import { AllEffect, ForkEffect, all, fork } from 'redux-saga/effects';
import { rootLoginSaga, rootsignupSaga } from '~/store';
import { rootBranchSaga } from './branch/branchSaga';
import { rootTicketSaga } from './ticket';

export function* rootSaga(): Generator<AllEffect<ForkEffect<unknown>>, void, unknown> {
    yield all([fork(rootLoginSaga)]);
    yield all([fork(rootsignupSaga)]);
    yield all([fork(rootBranchSaga)]);
    yield all([fork(rootTicketSaga)]);
}
