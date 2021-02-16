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

export default function Balcony({
  id,
  labelId,
  label,
  isBalcony,
  setBalcony,
  labelName,
}) {
  const classes = useStyles();

  const handleBalcony = (event) => {
    setBalcony(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id={labelId}>{labelName}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          value={isBalcony}
          onChange={handleBalcony}
          label={label}
        >
          <MenuItem value={"Yok"}>Yok</MenuItem>
          <MenuItem value={"Var"}>Var</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
