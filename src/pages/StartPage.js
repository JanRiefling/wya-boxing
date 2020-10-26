import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import WyaAppBar from "../components/WyaAppBar";
import StopWatch from "../components/timer/StopWatch";
import ComboDisplay from "../components/combo-display/ComboDisplay";
import { useDispatch } from "react-redux";
import AllSettings from "../components/AllSettings";
import { Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  stopWatch: {
    zIndex: theme.zIndex.drawer + 2,
  }
}));

export default function StartPage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  function startApp() {
    dispatch({ type: "START_COUNTDOWN" });
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <WyaAppBar />
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            WYA is a helper for shadowboxing
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <AllSettings />
        </Grid>
        <Grid item xs={10} >
          <Button onClick={startApp} variant="contained" color="primary" fullWidth>
            <Typography variant="h2">Whoop Your Ass</Typography>
            </Button>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ComboDisplay />
          </Paper>
          <Paper>
          <StopWatch />
            </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>By Jan Riefling</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
