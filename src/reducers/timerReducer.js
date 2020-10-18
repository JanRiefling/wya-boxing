import {
  SET_TIMER,
  PAUSE_TIMER,
  DECREMENT_TIMER,
  END_TIMER,
  START_TIMER
} from "../actions/index";

const initialState = {
  totalTimeInMs: 0,
  isStarted: false,
  isPaused: false,
};

function timerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TIMER:
      return {
        ...state,
        totalTimeInMs: action.totalTimeInMs,
      };
    case PAUSE_TIMER:
      return {
        totalTimeInMs: state.totalTimeInMs,
        isPaused: true,
        isStarted: false,
      };
    case END_TIMER:
      return initialState;
      case START_TIMER:
        return {
          ...state,
          isStarted: true,
        };
    case DECREMENT_TIMER:
      return {
        ...state,
        totalTimeInMs: state.totalTimeInMs - 1000,
      };
    default:
      return state;
  }
}

export default timerReducer;
