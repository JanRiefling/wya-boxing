export const SET_TIMER = 'SET_TIMER';


export function setTimerTime (time) { return {type: SET_TIMER, payload: time} };

export const RESET_TIMER = 'RESET_TIMER';

export const PAUSE_TIMER = 'PAUSE_TIMER';