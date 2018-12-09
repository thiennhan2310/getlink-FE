import {put, takeEvery} from 'redux-saga/effects';
import {setArticles,FETCH_ARTICLES} from '../actions/article';

export default function* watchAuth() {
  yield takeEvery(FETCH_ARTICLES, fetchArticles);
}

function* fetchArticles(action) {
  try {
    const articles = new Array(15).fill(1).map((item,idx)=>({id:idx,title:`Card ${idx}`,content:`Content ${idx}`,thumbnail:"https://phanquanghung.com/wp-content/uploads/2017/11/thumbnail-video-youtube.jpg"}));
    yield put(setArticles(articles));
  } catch (err) {
    console.log(err);
  }
}