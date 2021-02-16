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

export default function Province({
  id,
  labelId,
  label,
  province,
  setProvince,
  labelName,
}) {
  const classes = useStyles();

  const handleProvince = (event) => {
    setProvince(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id={labelId}>{labelName}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          value={province}
          onChange={handleProvince}
          label={label}
        >
          <MenuItem value={"Bursa"}>Bursa</MenuItem>
          <MenuItem value={"İstabul"}>İstabul</MenuItem>
          <MenuItem value={"Yalova"}>Yalova</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
