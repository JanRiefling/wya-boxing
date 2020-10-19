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

export default function ComboCard() {
  const classes = useStyles();
  const {combo} = useSelector(state => state.comboReducer);
  const dispatch = useDispatch();



  function addComboToArray() {
   dispatch({type: "SET_COMBOS", combo: combo, isSet: true });
   dispatch({type: "REMOVE_COMBO"})
  }

  function removeCombo() {
   dispatch({type: "REMOVE_COMBO"});
  }

  function removeSingleAction() {
    console.log("remove this card");
  }

  function randomComboKey() {
  return Math.floor(Math.random() * 100 + 1);

  }

  return (
    <Card className={classes.root}>
      <CardContent>
        {combo.map(action => 
          <Chip
            label={action}
            key={randomComboKey}
            onDelete={removeSingleAction}
          />
        )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={addComboToArray}>
          ADD Combo
        </Button>
        <Button size="small" onClick={removeCombo}>
          REMOVE ALL
        </Button>
      </CardActions>
    </Card>
  );
}
