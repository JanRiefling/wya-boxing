import React from "react";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

export default function StopWatch() {
  const timer = useSelector((state) => state.timerReducer);

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Typography>{timer.hours}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>{timer.minutes}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>{timer.seconds}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Button>Start</Button>
      </Grid>
      <Grid item xs={2}>
        <Button>Pause</Button>
      </Grid>
      <Grid item xs={2}>
        <Button>Refresh</Button>
      </Grid>
    </Grid>
  );
}
