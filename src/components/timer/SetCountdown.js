import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { useDispatch } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: 200,
  },
}));

export default function SetCountdown() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [countDownTime, setCountDownTime] = useState(4);

  function submitTime() {
    const totalTimeInMs = countDownTime * 1000;
    dispatch({ type: "SET_COUNTDOWN", countDownTimeInMs: totalTimeInMs });
  }


  const handleSliderChange = (event, newValue) => {
    setCountDownTime(newValue);
  };

  function valuetext(countDownTime) {
    return `${countDownTime}s`;
  }

  return (
    <FormControl className={classes.container} noValidate>
    <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Countdown max. 3 min
      </Typography>
      <Slider
        defaultValue={4}
        aria-labelledby="discrete-slider"
        getAriaValueText={valuetext}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        step={5}
        min={4}
        max={240}
        value={countDownTime}
      />
    </div>
      <Button
        className={classes.textField}
        variant="contained"
        color="primary"
        onClick={submitTime}
      >
        Set Countdown
      </Button>
    </FormControl>
  );
}
