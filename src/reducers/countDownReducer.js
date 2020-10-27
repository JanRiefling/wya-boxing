import {
  END_COUNTDOWN,
  PAUSE_COUNTDOWN,
  SET_COUNTDOWN,
  START_COUNTDOWN,
  DECREMENT_COUNTDOWN
} from "../actions/index";

const initialState = {
  countDownTimeInMs: 4000,
  countDownIsStarted: false,
  countDownIsPaused: false,
};

function countDownReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COUNTDOWN:
      return {
        ...state,
        countDownTimeInMs: action.countDownTimeInMs,
      };
    case PAUSE_COUNTDOWN:
      return {
        countDownTimeInMs: state.countDownTimeInMs,
        countDownIsPaused: true,
        countDownIsStarted: false,
      };
    case END_COUNTDOWN:
      return initialState;
    case START_COUNTDOWN:
      return {
        ...state,
        countDownIsStarted: true,
      };
    case DECREMENT_COUNTDOWN:
      return {
        ...state,
        countDownTimeInMs: state.countDownTimeInMs - 1000,
      };
    default:
      return state;
  }
}

export default countDownReducer;
