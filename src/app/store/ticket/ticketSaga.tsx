import { http } from '~/services';
import { ticketFail, ticketRequest, ticketSuccess } from '././ticketSlice';
import { ForkEffect, put, takeEvery } from 'redux-saga/effects';

function* ticketSaga(action:ReturnType<typeof ticketRequest>): Generator{

    try{
        const response: any =yield http.post('/ticket', action?.payload);
        yield put(ticketSuccess(response.data));
    }
    catch(err:any){
        yield put(ticketFail(err?.response.data.mas));
    }
}

export function* rootTicketSaga():Generator<ForkEffect<never>, void, unknown>{
    yield takeEvery(ticketRequest, ticketSaga);
}