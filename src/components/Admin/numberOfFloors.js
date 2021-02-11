import React, { useState, useEffect } from "react";
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

export default function NumberOfFloors({
  id,
  labelId,
  label,
  roomNumber,
  setRoomNumber,
  labelName,
}) {
  const classes = useStyles();
  const [menuItems, setMenuItems] = useState([]);
  const handleBuildingAge = (event) => {
    setRoomNumber(event.target.value);
  };
  useEffect(() => {
    for (var i = 0; i <= 30; i++) {
      menuItems.push(i);
    }
  }, []);

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
          {menuItems.map((item, index) => (
            <MenuItem key={index} value={`${item}`}>
              {item}
            </MenuItem>
          ))}
          <MenuItem value={"31 ve üzeri"}>31 ve üzeri</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
