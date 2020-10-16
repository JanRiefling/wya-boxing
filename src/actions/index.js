export const SET_TIMER = 'SET_TIMER';
export const DECREMENT_TIMER = 'DECREMENT_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const PAUSE_TIMER = 'PAUSE_TIMER';


export function setTimerTime (totalTimeInMs) { 
    return {
        type: SET_TIMER, 
        totalTimeInMs,
    } 
};

export function decrementTimer(totalTimeInMs) {
    return {
    type: DECREMENT_TIMER,
    totalTimeInMs,
}
}

