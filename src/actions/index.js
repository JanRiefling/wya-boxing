// timer actions

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

// combo action

export const SET_COMBOS = 'SET_COMBOS'
export const SET_COMBO = 'SET_COMBO'
export const REMOVE_COMBO = 'REMOVE_COMBO'
export const REMOVE_COMBOS = 'REMOVE_COMBOS'
export const UNSET_COMBOS = 'UNSET_COMBOS'

export function setCombos(combo) {
  return {
    type: SET_COMBOS,
    combo,
  };
}

// countDownActions


export const SET_COUNTDOWN = "SET_COUNTDOWN";
export const DECREMENT_COUNTDOWN = "DECREMENT_COUNTDOWN";
export const PAUSE_COUNTDOWN = "PAUSE_COUNTDOWN";
export const END_COUNTDOWN = "END_COUNTDOWN";
export const START_COUNTDOWN = "START_COUNTDOWN";