export const SET_TIMER = 'SET_TIMER';


export function setTimerTime (hours, minutes, seconds, ms) { 
    return {
        type: SET_TIMER, 
        hours: hours, 
        minutes: minutes, 
        seconds: seconds,
        sumInMs: ms,
    } 
};

export const RESET_TIMER = 'RESET_TIMER';

export const PAUSE_TIMER = 'PAUSE_TIMER';