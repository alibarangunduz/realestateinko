import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Checkboxes from "./checkBox";
import { FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Cephe({
  bati,
  setBati,
  dogu,
  setDogu,
  guney,
  setGuney,
  kuzey,
  setKuzey,
}) {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <FormControlLabel
            value="Batı"
            control={<Checkboxes checked={bati} setChecked={setBati} />}
            label="Batı"
            labelPlacement="Batı"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="Doğu"
            control={<Checkboxes checked={dogu} setChecked={setDogu} />}
            label="Dogu"
            labelPlacement="Doğu"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="Güney"
            control={<Checkboxes checked={guney} setChecked={setGuney} />}
            label="Guney"
            labelPlacement="Güney"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="Kuzey"
            control={<Checkboxes checked={kuzey} setChecked={setKuzey} />}
            label="Kuzey"
            labelPlacement="Kuzey"
          />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
