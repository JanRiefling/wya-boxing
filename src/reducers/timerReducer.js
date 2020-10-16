import { AccordionActions } from '@material-ui/core';
import {SET_TIMER, PAUSE_TIMER, RESET_TIMER, DECREMENT_TIMER} from '../actions/index'


const initialState = {
  totalTimeInMs: 0,
}



function timerReducer (state = initialState, action) {

    switch (action.type) {
      case SET_TIMER:
        return {
          ...state,
          totalTimeInMs: action.totalTimeInMs,
        };
      case PAUSE_TIMER:
        return {...state};
      case RESET_TIMER:
        return state;
      case DECREMENT_TIMER:
        return {
          ...state,
         totalTimeInMs: state.totalTimeInMs - 1000
        };
      default:
        return state;
    }
  };


  export default timerReducer;