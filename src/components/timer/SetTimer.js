import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { useDispatch } from "react-redux";
import { setTimerTime } from "../../actions/index";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function SetTimer() {
  const classes = useStyles();

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const dispatch = useDispatch();

  

  function submitTime() {
    
    const totalTimeInMs = (seconds * 1000) + (hours * 60 * 60 * 1000) + (minutes * 60 * 1000);
    dispatch(setTimerTime(totalTimeInMs));
    console.log(totalTimeInMs)
  }

  return (
    <FormControl className={classes.container} noValidate>
      <TextField
        id="setHours"
        label="Hours"
        type="number"
        onChange={(e) => {
          setHours(e.target.value);
        }}
        value={hours}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="setMinutes"
        label="Minutes"
        type="number"
        onChange={(e) => {
          setMinutes(e.target.value);
          console.log(minutes);
        }}
        value={minutes}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="setSeconds"
        label="Seconds"
        type="number"
        onChange={(e) => {
          setSeconds(e.target.value);
        }}
        value={seconds}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button variant="contained" color="primary" onClick={submitTime}>
        Set Timer
      </Button>
    </FormControl>
  );
}
