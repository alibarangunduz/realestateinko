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

export default function SelectForProperty({
  id,
  labelId,
  label,
  roomNumber,
  setRoomNumber,
  labelName,
}) {
  const classes = useStyles();

  const handleRoomNumber = (event) => {
    setRoomNumber(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id={labelId}>{labelName}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          value={roomNumber}
          onChange={handleRoomNumber}
          label={label}
        >
          <MenuItem value={"1+1"}>1+1</MenuItem>
          <MenuItem value={"1.5+1"}>1.5+1</MenuItem>
          <MenuItem value={"2+1"}>2+1</MenuItem>
          <MenuItem value={"2.5+1"}>2.5+1</MenuItem>
          <MenuItem value={"2+2"}>2+2</MenuItem>
          <MenuItem value={"3+1"}>3+1</MenuItem>
          <MenuItem value={"3.5+1"}>3.5+1</MenuItem>
          <MenuItem value={"3+2"}>3+2</MenuItem>
          <MenuItem value={"4+1"}>4+1</MenuItem>
          <MenuItem value={"4.5+1"}>4.5+1</MenuItem>
          <MenuItem value={"4+2"}>4+2</MenuItem>
          <MenuItem value={"4+3"}>4+3</MenuItem>
          <MenuItem value={"4+4"}>4+4</MenuItem>
          <MenuItem value={"5+1"}>5+1</MenuItem>
          <MenuItem value={"5+2"}>5+2</MenuItem>
          <MenuItem value={"5+3"}>5+3</MenuItem>
          <MenuItem value={"5+4"}>5+4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
