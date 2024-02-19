import { combineReducers } from "redux";

import registerReducer from "./modules/register/reducer";
const rootReducer = combineReducers({
  register: registerReducer,
});

export default rootReducer;
