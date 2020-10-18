import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

export default function ComboDisplay() {
  const basicCombos = [
    [1, 2],
    [1, 1, 2],
    [1, 2, 3],
    [1, 2, 3, 2],
    [1, 2, 5, 2],
    [1, 6, 3, 2],
    [2, 3, 2],
  ];
  const comboIntervalSpeed = 3000;	
  const [combo, setCombo] = useState([]);
  const { isStarted, totalTimeInMs } = useSelector(
    (state) => state.timerReducer
  );

  useEffect(() => {
    if (isStarted) {
      
      let comboInterval = setInterval(() => {
        setCombo(basicCombos[Math.floor((Math.random() * (basicCombos.length - 1)) + 1)]);
      } , comboIntervalSpeed)
 
      setTimeout(() =>{
        clearInterval(comboInterval)
      }, totalTimeInMs)

      
    }
  }, [isStarted]);

  return (
    <Grid container justify="center">
          {combo.map((singleCombo) => {
            return (<Grid item xs={2}><Typography variant="h1">{singleCombo}</Typography> </Grid>)
          })
        }
       
      <Grid item xs={12}></Grid>
    </Grid>
  );
}
