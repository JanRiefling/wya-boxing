import {combineReducers} from 'redux';
import timerReducer from './timerReducer';
import comboReducer from './comboReducer';
import countDownReducer from './countDownReducer';

const rootReducer = combineReducers({
    timerReducer,
    comboReducer,
    countDownReducer,
})

export default rootReducer;