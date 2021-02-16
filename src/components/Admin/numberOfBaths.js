import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NumberOfBaths({
  id,
  labelId,
  label,
  numberOfBath,
  setNumberOfBath,
  labelName,
}) {
  const classes = useStyles();

  const handleNumberOfBaths = (event) => {
    setNumberOfBath(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id={labelId}>{labelName}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          value={numberOfBath}
          onChange={handleNumberOfBaths}
          label={label}
        >
          <MenuItem value={"Yok"}>Yok</MenuItem>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5"}>5</MenuItem>
          <MenuItem value={"6"}>6</MenuItem>
          <MenuItem value={"6+"}>6 Üzeri</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
