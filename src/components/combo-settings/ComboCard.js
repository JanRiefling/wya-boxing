import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

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

export default function ComboCard({ combo }) {
  const classes = useStyles();

  function addComboToArray() {
    /* dispatch(setTimerTime(totalTimeInMs)); */
  }

  function removeCombo() {
   
  }

  function removeSingleAction() {}

  function randomComboKey() {
   console.log(Math.floor(Math.random() * 100 + 1))

  }

  return (
    <Card className={classes.root}>
      <CardContent>
        {combo.map((action) => 
        { 
            console.log(action.key)
            return (
          <Chip
            label={action}
            key={randomComboKey()}
            onDelete={removeSingleAction}
          />
        )})}
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
