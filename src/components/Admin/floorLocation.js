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

export default function FloorLocation({
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
          <MenuItem value={"Kot 4"}>Kot 4</MenuItem>
          <MenuItem value={"Kot 3"}>Kot 3</MenuItem>
          <MenuItem value={"Kot 2"}>Kot 2</MenuItem>
          <MenuItem value={"Kot 1"}>Kot 1</MenuItem>
          <MenuItem value={"Bodrum kat"}>Bodrum kat</MenuItem>
          <MenuItem value={"Zemin Kat"}>Zemin Kat</MenuItem>
          <MenuItem value={"Bahçe Katı"}>Bahçe Katı</MenuItem>
          <MenuItem value={"Giriş Katı"}>Giriş Katı</MenuItem>
          <MenuItem value={"Yüksek Giriş"}>Yüksek Giriş</MenuItem>
          <MenuItem value={"Müstakil"}>Müstakil</MenuItem>
          <MenuItem value={"Villa Tipi"}>Villa Tipi</MenuItem>
          <MenuItem value={"Villa Tipi"}>Çatı Katı</MenuItem>
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
