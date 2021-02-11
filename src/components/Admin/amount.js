import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

export default function InputAdornments({
  amount,
  setAmount,
  header,
  id,
  subtitle,
}) {
  const classes = useStyles();

  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className={classes.root}>
      <div>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">{header}</InputLabel>
          <Input
            id={id}
            value={amount}
            onChange={handleAmount}
            startAdornment={
              <InputAdornment position="start">{subtitle}</InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div></div>
    </div>
  );
}
