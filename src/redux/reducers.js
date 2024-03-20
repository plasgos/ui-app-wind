import {combineReducers} from 'redux';

import registerReducer from './modules/register/reducer';
import loginReducer from './modules/login/reducer';
const rootReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
});

export default rootReducer;
