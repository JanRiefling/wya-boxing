import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import ComboCard from "./ComboCard";
import CombosCard from "./CombosCard";



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
  const [singleAction, setSingleAction] = useState("");
  const dispatch = useDispatch();

 console.log(singleAction);

 function addSingleAction(){
  dispatch({type: 'SET_COMBO', singleAction: singleAction})
  setSingleAction("");
 }

  return (
      <Grid container spacing={5}>
          <Grid item>
    <FormControl className={classes.container} noValidate>
      <TextField
        id="setCombo"
        label="Set Combo up to 5"
        type="text"
        onChange={(e) => {
          setSingleAction(e.target.value);
        }}
        value={singleAction}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <Button className={classes.textField} variant="contained" color="primary" onClick={addSingleAction}>
       ADD PUNCH
      </Button>
    </FormControl>
    </Grid>
    <Grid item>
        <ComboCard/>
    </Grid>
    <Grid item>
        <CombosCard/>
    </Grid>
    </Grid>
  );
}