import {SET_TIMER, PAUSE_TIMER, RESET_TIMER} from '../actions/index'




function timerReducer (state = 0, action) {



    switch (action.type) {
      case SET_TIMER:
        return action.payload;
      case PAUSE_TIMER:
        return state - 1;
      case RESET_TIMER:
        return state;
      default:
        return state;
    }
  };


  export default timerReducer;