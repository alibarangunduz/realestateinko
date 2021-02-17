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

export default function UsingStatus({
  id,
  labelId,
  label,
  usingstatus,
  setUsingStatus,
  labelName,
}) {
  const classes = useStyles();

  const handleUsingstatus = (event) => {
    setUsingStatus(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id={labelId}>{labelName}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          value={usingstatus}
          onChange={handleUsingstatus}
          label={label}
        >
          <MenuItem value={"Boş"}>Boş</MenuItem>
          <MenuItem value={"Kiracılı"}>Kiracılı</MenuItem>
          <MenuItem value={"Kiracılı"}>Kiracılı</MenuItem>
          <MenuItem value={"Mülk Sahibi"}>Mülk Sahibi</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
