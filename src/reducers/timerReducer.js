import {SET_TIMER, PAUSE_TIMER, RESET_TIMER} from '../actions/index'


const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  sumInMs: 0
}



function timerReducer (state = initialState, action) {



    switch (action.type) {
      case SET_TIMER:
        return {
          ...state,
          hours: action.hours,
          minutes: action.minutes,
          seconds: action.seconds,
          sumInMs: action.ms
        };
      case PAUSE_TIMER:
        return state - 1;
      case RESET_TIMER:
        return state;
      default:
        return state;
    }
  };


  export default timerReducer;