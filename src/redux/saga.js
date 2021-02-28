import { all } from 'redux-saga/effects';

export function* getData() {}

export function* handleFetchData() {}

export default function* rootSaga() {
  yield all([getData()]);
}
