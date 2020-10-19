export function parseTime(ms, parsedTime) {
  let parsedHours = Math.floor(ms / 3600000);
  let parsedMinutes = Math.floor((ms % 3600000) / 60000);
  let parsedSeconds = Math.floor(((ms % 360000) % 60000) / 1000);

  if (parsedHours < 10) {
    parsedHours = "0" + parsedHours;
  }
  if (parsedMinutes < 10) {
    parsedMinutes = "0" + parsedMinutes;
  }
  if (parsedSeconds < 10) {
    parsedSeconds = "0" + parsedSeconds;
  }

  return {
    ...parsedTime,
    hours: parsedHours,
    minutes: parsedMinutes,
    seconds: parsedSeconds,
  };
}


export function countDown(dispatch, countDownTime){
  setTimeout(()=>{
    dispatch({type: "START_TIMER"})
  },countDownTime)
}
