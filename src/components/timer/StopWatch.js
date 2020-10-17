import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { START_TIMER, END_TIMER } from "../../actions";

export default function StopWatch() {
  const timer = useSelector((state) => state.timerReducer);
  const dispatch = useDispatch();
  const [parsedTime, setParsedTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  let timeOut;
  let timerInterval;

  useEffect(() => {
    let parsedHours = Math.floor(timer.totalTimeInMs / 3600000);
    let parsedMinutes = Math.floor((timer.totalTimeInMs % 3600000) / 60000);
    let parsedSeconds = Math.floor(
      ((timer.totalTimeInMs % 360000) % 60000) / 1000
    );

    if (parsedHours < 10) {
      parsedHours = "0" + parsedHours;
    }

    if (parsedMinutes < 10) {
      parsedMinutes = "0" + parsedMinutes;
    }

    if (parsedSeconds < 10) {
      parsedSeconds = "0" + parsedSeconds;
    }

    setParsedTime({
      ...parsedTime,
      hours: parsedHours,
      minutes: parsedMinutes,
      seconds: parsedSeconds,
    });
  }, [timer]);

  useEffect(() => {

    if(timer.isStarted == true) {

      timeOut = setTimeout(() => {
        clearInterval(timerInterval);
        dispatch({type: "END_TIMER"})
      }, timer.totalTimeInMs + 1000);

      timerInterval = setInterval( () => {
        dispatch({ type: "DECREMENT_TIMER"});
      }, 1000);
      
    }
  },[timer.isStarted])

  function startTimer() {
    dispatch({type: 'START_TIMER'});
  }

  function pauseTimer() {
    dispatch({ type: "PAUSE_TIMER"});
  }

  function stopTimer() {
    dispatch({type: "END_TIMER"});
    clearInterval(timerInterval);
    setTimeout(timerInterval);
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
        <Button onClick={stopTimer}>Stop</Button>
        }
      </Grid>
      <Grid item xs={2}>
        <Button onClick={pauseTimer}>Pause</Button>
      </Grid>
      <Grid item xs={2}>
        <Button>Refresh</Button>
      </Grid>
    </Grid>
  );
}
