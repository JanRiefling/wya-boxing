import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

export default function ComboDisplay() {
  const {combos, basicCombos, isSet} = useSelector(state => state.comboReducer);
  const comboIntervalSpeed = 4000;
  const [combo, setCombo] = useState([]);
  const { isStarted, totalTimeInMs } = useSelector(
    (state) => state.timerReducer
  );
  const [comboInterval, setComboInterval] = useState();
  const [comboTimeout, setComboTimeout] = useState();

  useEffect(() => {
    if (isStarted) {
      setComboInterval(setInterval(() => {

        if(isSet) {
          setCombo(combos[Math.floor(Math.random() * (combos.length - 1) + 1)]);
        } else {
          setCombo(basicCombos[Math.floor(Math.random() * (basicCombos.length - 1) + 1)]);
        }
        

      }, comboIntervalSpeed));

      setComboTimeout(setTimeout(() => {
        clearInterval(comboInterval);
      }, totalTimeInMs));
    } else {
      clearInterval(comboInterval);
      clearTimeout(comboTimeout);
    }
  }, [isStarted]);

  return (
    <Grid container spacing={3}>
      {combo.map((singleCombo) => {
        return (
          <Grid item xs={4}>
            <Paper><Typography variant="h1">{singleCombo}</Typography></Paper>
          </Grid>
        );
      })}

      <Grid item xs={12}></Grid>
    </Grid>
  );
}
