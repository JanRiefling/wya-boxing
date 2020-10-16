import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { SET_TIMER, PAUSE_TIMER } from "../../actions/index";

export default function StopWatch() {
  const timer = useSelector((state) => state.timerReducer);
  const dispatch = useDispatch();
  let totalTimeInMs = timer.totalTimeInMs


/*   function timeConversion(totalTimeInMs) {

    let seconds = (totalTimeInMs / 1000).toFixed(1);

    let minutes = (totalTimeInMs / (1000 * 60)).toFixed(1);

    let hours = (totalTimeInMs / (1000 * 60 * 60)).toFixed(1);

    let days = (totalTimeInMs / (1000 * 60 * 60 * 24)).toFixed(1);

    if (seconds < 60) {
        return seconds + " Sec";
    } else if (minutes < 60) {
        return minutes + " Min";
    } else if (hours < 24) {
        return hours + " Hrs";
    } else {
        return days + " Days"
    }

    let timerObject = {hours: hours, minutes: minutes, seconds: seconds};

    return timerObject;
} */

  function startTimer() {
    
    if(!null || !undefined) {
      setTimeout(() => { clearInterval(secondInterval); console.log('stop'); }, timer.totalTimeInMs);

      let secondInterval = setInterval(function() {
        
        dispatch({type: "DECREMENT_TIMER", totalTimeInMs: totalTimeInMs})
        console.log(timer.totalTimeInMs)
      }, 1000 );
    }


  }

  function pauseTimer() {
    dispatch({type: PAUSE_TIMER});
  }


  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Typography>{timer.totalTimeInMs}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>{timer.minutes}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>{timer.seconds}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Button onClick={startTimer}>Start</Button>
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
