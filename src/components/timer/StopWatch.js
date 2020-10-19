import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import {countDown, parseTime} from "../../utils/timer-utils";

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
  const [countDownInterval, setCountDownInterval] = useState();
  const [timeOutTimer, setTimeOutTimer] = useState();
  const [timeOutCountDown, setTimeOutCountDown] = useState();

  useEffect(() => {
    setParsedTime(parseTime(totalTimeInMs, parsedTime));
    // eslint-disable-next-line
  }, [timer]);

useEffect(() => {

  if(isStarted === true) {
 setTimerInterval(setInterval(() => { 
    dispatch({type: 'DECREMENT_TIMER'});
  }, 1000))

  setTimeOutTimer(setTimeout(() => {
    clearInterval(timerInterval)
    dispatch({type: 'END_TIMER'});
    dispatch({type: 'UNSET_COMBOS'})
  },totalTimeInMs + 1000))

} else {
  clearInterval(timerInterval);
  clearTimeout(timeOutTimer);
}

// eslint-disable-next-line
},[isStarted])


  function startTimer() {
    setTimeOutCountDown(setTimeout(()=>{
      clearInterval(countDownInterval);
      dispatch({type: "START_TIMER"});
    },3000))
  
   setCountDownInterval(setInterval(()=>{
      const timeToStart = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
    },2000))
  }

  function pauseTimer() {
    dispatch({ type: "PAUSE_TIMER"});
  }

  function stopTimer() {
    dispatch({type: "END_TIMER"});
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Typography variant="h3">{parsedTime.hours}</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="h3">:</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h3">{parsedTime.minutes}</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography variant="h3">:</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h3">{parsedTime.seconds}</Typography>
      </Grid>
      <Grid item xs={2}>
        {
        !isStarted ? 
        <Button onClick={startTimer} variant="outlined">Start</Button> : 
        <Button onClick={pauseTimer} variant="outlined">Pause</Button>
        }
      </Grid>
      <Grid item xs={2}>
        <Button onClick={stopTimer} variant="outlined">Stop</Button>
      </Grid>
    </Grid>
  );
}
