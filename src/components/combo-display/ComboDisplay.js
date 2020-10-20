import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import countDownSoundFile from "../../assets/sounds/count-down.mp3";
import Backdrop from "@material-ui/core/Backdrop";
import StopWatch from "../timer/StopWatch"

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
export default function ComboDisplay() {
  const classes = useStyles();
  const { combos, basicCombos, isSet } = useSelector(
    (state) => state.comboReducer
  );
  // später dynamisch über settings
  const comboIntervalSpeed = 4000;
  const [combo, setCombo] = useState([]);
  const { isStarted, totalTimeInMs } = useSelector(
    (state) => state.timerReducer
  );
  const { countDownIsStarted, countDownTimeInMs } = useSelector(
    (state) => state.countDownReducer
  );
  const [comboInterval, setComboInterval] = useState();
  const [comboTimeout, setComboTimeout] = useState();
  let countDownSound = new Audio(countDownSoundFile);
  const [openBackdrop, setOpenBackDrop] = useState(false);

  useEffect(() => {
    if (countDownIsStarted || isStarted) {
      setOpenBackDrop(true);
    }

    if (isStarted) {
      setComboInterval(
        setInterval(() => {
          if (isSet) {
            setCombo(
              combos[Math.floor(Math.random() * (combos.length - 1) + 1)]
            );
          } else {
            setCombo(
              basicCombos[
                Math.floor(Math.random() * (basicCombos.length - 1) + 1)
              ]
            );
          }
        }, comboIntervalSpeed)
      );

      setComboTimeout(
        setTimeout(() => {
          clearInterval(comboInterval);
        }, totalTimeInMs)
      );
    } else {
      clearInterval(comboInterval);
      clearTimeout(comboTimeout);
    }
  }, [isStarted, countDownTimeInMs]);

  const handleClose = () => {
    setOpenBackDrop(false);
  };

  // unsauber sollte in den use effect
  let parsedCountDown = Math.floor(
    ((countDownTimeInMs % 360000) % 60000) / 1000
  );
  if (parsedCountDown < 10) {
    parsedCountDown = "0" + parsedCountDown;
  }

  if (countDownTimeInMs === 3000) {
    countDownSound.play();
  }

  return (
    <Backdrop
      className={classes.backdrop}
      open={openBackdrop}
      onClick={handleClose}
    >
      <Grid container spacing={3}>
        {countDownIsStarted && (
          <Grid item xs={12}>
            <Typography variant="h1">{parsedCountDown}</Typography>
          </Grid>
        )}
        {combo.map((singleCombo) => {
          return (
            <Grid item xs={4}>
              <Typography variant="h1">{singleCombo}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </Backdrop>
  );
}
