import { call, put, takeEvery, all } from 'redux-saga/effects'
import { signInApi, signupApi } from '../../Common/API/Api';
import * as ActionType from '../ActionType'

function* signup(action) {
   try {
   
      const user = yield call(signupApi, action.payload);
      console.log(user);

      // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
      yield put({type: ActionType.SET_ALERT, payload: { text : user, color: "success"}})

   } catch (e) {

      yield put({ type: "USER_FETCH_FAILED", message: e.message });
      console.log(e);

      // yield put({type: "USER_FETCH_FAILED", message: e.message});
      yield put({type: ActionType.SET_ALERT, payload: { text : e, color: "error"}})
   }
}

function* signIn(action){
   try{
      const user = yield call(signInApi, action.payload);
      // console.log(user);
      // yield put({type: "USER_FETCH_SUCCEEDED", user: user});
      yield put({type: ActionType.SET_ALERT, payload: { text : user, color: "success"}})
   }catch (e) {
      
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
      yield put({type: ActionType.SET_ALERT, payload: { text : e, color: "error"}})
   }
}

function* watchsignup() {
  yield takeEvery(ActionType.SIGNUP_ACTION, signup);
}

function* watchsignIn(){
   yield takeEvery(ActionType.SIGNIN_ACTION,signIn)
}

export function* Authsaga(){
    yield all([
      watchsignup(),
      watchsignIn()
    ])
}

