import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getPostDetail } from '../../services/post';

//worker saga
function* fetchPostDetail(action: { type: string; payload: { id: number } }) {
  console.log(action);

  try {
    const post: {
      id: number;
      title: string;
      body: string;
      userId: number;
    } = yield call(getPostDetail, action.payload.id);
    console.log(post);

    yield put({ type: 'POST_DETAIL_SUCCEED', post });
  } catch (error: any) {
    yield put({ type: 'POST_DETAIL_FAILED', message: error.message });
  }
}
//saga
function* myPostDetailSaga() {
  console.log('hello from myPostDetailSaga');
  yield takeEvery('POST_DETAIL_REQUESTED', fetchPostDetail);
}
export default myPostDetailSaga;
