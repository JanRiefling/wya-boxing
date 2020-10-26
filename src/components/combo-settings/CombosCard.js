import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CombosCard() {
  const classes = useStyles();
  const {combos} = useSelector(state => state.comboReducer);
  const dispatch = useDispatch();



  function saveCombos() {
    console.log("see you later in the database")
  }

  function removeCombos() {
   dispatch({type: "REMOVE_COMBOS"})
  }

/*   function removeSingleAction() {
    
  } */

  function randomComboKey() {
  return Math.floor(Math.random() * 100 + 1);

  }

  return (
    <Card className={classes.root}>
      <CardContent>
        {combos.map(singleCombo => 
          <Chip
            label={singleCombo}
            key={randomComboKey}
            onDelete={() => dispatch({type: "REMOVE_COMBO", payload: singleCombo.key})}
          />
        )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={saveCombos}>
          ADD Combo
        </Button>
        <Button size="small" onClick={removeCombos}>
          REMOVE ALL
        </Button>
      </CardActions>
    </Card>
  );
}