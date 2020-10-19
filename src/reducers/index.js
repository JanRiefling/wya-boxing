import {combineReducers} from 'redux';
import timerReducer from './timerReducer';
import comboReducer from './comboReducer';

const rootReducer = combineReducers({
    timerReducer,
    comboReducer,
})

export default rootReducer;