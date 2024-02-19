import { all } from "redux-saga/effects";
import checkRegister from "../redux/modules/register/saga";

export default function* rootSaga() {
  yield all([...checkRegister]);
}
