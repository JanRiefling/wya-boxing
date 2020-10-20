import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import countDownSoundFile from "../../assets/sounds/count-down.mp3"

export default function ComboDisplay() {
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



  useEffect(() => {



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

    // unsauber sollte in den use effect
    let parsedCountDown = Math.floor(
      ((countDownTimeInMs % 360000) % 60000) / 1000
    );
    if (parsedCountDown < 10) {
      parsedCountDown = "0" + parsedCountDown;
    }

    if(countDownTimeInMs === 3000){
      countDownSound.play();
  }



  return (
    <Grid container spacing={3}>
      {countDownIsStarted && (
        <Grid item xs={4}>
          <Paper>
            <Typography variant="h1">{parsedCountDown}</Typography>
          </Paper>
        </Grid>
      )}
      {combo.map((singleCombo) => {
        return (
          <Grid item xs={4}>
            <Paper>
              <Typography variant="h1">{singleCombo}</Typography>
            </Paper>
          </Grid>
        );
      })}

      <Grid item xs={12}></Grid>
    </Grid>
  );
}
