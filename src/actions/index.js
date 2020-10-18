export const SET_TIMER = "SET_TIMER";
export const DECREMENT_TIMER = "DECREMENT_TIMER";
export const RESET_TIMER = "RESET_TIMER";
export const PAUSE_TIMER = "PAUSE_TIMER";
export const END_TIMER = "END_TIMER";
export const START_TIMER = "START_TIMER";

export function setTimerTime(totalTimeInMs) {
  return {
    type: SET_TIMER,
    totalTimeInMs,
  };
}

export function decrementTimer() {
  return {
    type: DECREMENT_TIMER,
  };
}

export function pauseTimer() {
  return {
    type: PAUSE_TIMER,
  };
}

export function endTimer() {
  return {
    type: END_TIMER,
  };
}

export function startTimer() {
  return {
    type: START_TIMER,
  };
}
