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

export default function BuldingAge({
  id,
  labelId,
  label,
  roomNumber,
  setRoomNumber,
  labelName,
}) {
  const classes = useStyles();

  const handleBuildingAge = (event) => {
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
          onChange={handleBuildingAge}
          label={label}
        >
          <MenuItem value={"0"}>0</MenuItem>
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={"2"}>2</MenuItem>
          <MenuItem value={"3"}>3</MenuItem>
          <MenuItem value={"4"}>4</MenuItem>
          <MenuItem value={"5-10 Arası"}>5-1 Arası</MenuItem>
          <MenuItem value={"11-15 Arası"}>11-15 Arası</MenuItem>
          <MenuItem value={"16-20 Arası"}>16+20</MenuItem>
          <MenuItem value={"21-25 Arası"}>21+25</MenuItem>
          <MenuItem value={"26-30 Arası"}>26+30</MenuItem>
          <MenuItem value={"31 ve Üzeri"}>31 ve üzeri</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
