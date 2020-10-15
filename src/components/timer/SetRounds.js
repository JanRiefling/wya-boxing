import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SetRounds() {
  const classes = useStyles();

  const [rounds, setRounds] = useState(0);

  function submitRounds() {
    let roundsInMs = rounds * 180 * 1000;
    console.log(roundsInMs);
  }

  return (
    <FormControl className={classes.root}>
      <TextField 
      id="setRounds"
      label="Rounds a 3 min"
      type="number"
      value={rounds}
      onChange={e => setRounds(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={submitRounds}>Set Rounds</Button>
    </FormControl>
  );
}
