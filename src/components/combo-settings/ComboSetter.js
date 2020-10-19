import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { useDispatch } from "react-redux";

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

export default function ComboSetter() {
  const classes = useStyles();

  const [combo, setCombo] = useState([""]);
  const [arrayCombos, setArrayCombos] = useState([[""]]);
  const dispatch = useDispatch();

  

  function submitArrayOfCombos() {
    /* dispatch(setTimerTime(totalTimeInMs)); */
  }

 function resetCombos() {

 }


  return (
    <FormControl className={classes.container} noValidate>
      <TextField
        id="setCombo"
        label="Set Combo up to 5"
        type="text"
        onChange={(e) => {
          setCombo(e.target.value);
        }}
        value={combo}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button className={classes.textField} variant="contained" color="primary" onClick={submitArrayOfCombos}>
       ADD COMBO
      </Button>
      <Button className={classes.textField} variant="contained" color="primary" onClick={resetCombos}>Reset</Button>
    </FormControl>
  );
}