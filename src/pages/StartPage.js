import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import WyaAppBar from "../components/WyaAppBar";
import SetTimer from "../components/timer/SetTimer";
import SetRounds from "../components/timer/SetRounds";
import StopWatch from "../components/timer/StopWatch";
import ComboDisplay from "../components/combo-display/ComboDisplay";
import { useSelector } from "react-redux";
import ComboSetter from "../components/combo-settings/ComboSetter";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function StartPage() {
  const classes = useStyles();
  const { isStarted } = useSelector((state) => state.timerReducer);

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

        <Grid item xs={12} sm={6}>
          {isStarted === false ? (
            <Paper className={classes.paper}>
              <SetTimer />
            </Paper>
          ) : (
            []
          )}
        </Grid>

        <Grid item xs={12} sm={6}>
          {isStarted === false ? (
            <Paper className={classes.paper}>
              <SetRounds />
            </Paper>
          ) : (
            []
          )}
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><ComboSetter/></Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ComboDisplay />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
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
