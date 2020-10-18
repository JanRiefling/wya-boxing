import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import {parseTime} from "../../utils/timer-utils";

export default function StopWatch() {

  const {totalTimeInMs, isStarted, isPaused} = useSelector((state) => state.timerReducer);
  const timer = useSelector((state) => state.timerReducer);
  const dispatch = useDispatch();
  const [parsedTime, setParsedTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [timerInterval, setTimerInterval] = useState();
  const [timeOutTimer, setTimeOutTimer] = useState();

  useEffect(() => {
    setParsedTime(parseTime(totalTimeInMs, parsedTime));
    // eslint-disable-next-line
  }, [timer]);

useEffect(() => {
  if(isStarted === true) {

  setTimeOutTimer(setTimeout(() => {
    clearInterval(timerInterval);
    dispatch({type: 'END_TIMER'});
  }, totalTimeInMs + 1000 ))

 setTimerInterval(setInterval(() => { 
    dispatch({type: 'DECREMENT_TIMER'});
  }, 1000))

} else {
  clearInterval(timerInterval);
  clearTimeout(timeOutTimer);
}


},[isStarted])


  function startTimer() {
    if(totalTimeInMs > 0) {
      dispatch({type: 'START_TIMER'});
    }
  }

  function pauseTimer() {
    dispatch({ type: "PAUSE_TIMER"});
  }

  function stopTimer() {
    dispatch({type: "END_TIMER"});
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <Typography>{parsedTime.hours}</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography>:</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>{parsedTime.minutes}</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography>:</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>{parsedTime.seconds}</Typography>
      </Grid>
      <Grid item xs={2}>
        {
        !timer.isStarted ? 
        <Button onClick={startTimer}>Start</Button> : 
        <Button onClick={pauseTimer}>Pause</Button>
        }
      </Grid>
      <Grid item xs={2}>
        <Button onClick={stopTimer}>Stop</Button>
      </Grid>
      <Grid item xs={2}>
        <Button>Refresh</Button>
      </Grid>
    </Grid>
  );
}
