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

export default function District({
  id,
  labelId,
  label,
  district,
  setDistrict,
  labelName,
}) {
  const classes = useStyles();

  const handleDistrict = (event) => {
    setDistrict(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id={labelId}>{labelName}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          value={district}
          onChange={handleDistrict}
          label={label}
        >
          <MenuItem value={"BuyukOrhan"}>BüyükOrhan</MenuItem>
          <MenuItem value={"Gemlik"}>Gemlik</MenuItem>
          <MenuItem value={"Gürsü"}>Gürsü</MenuItem>
          <MenuItem value={"Harmancik"}>Harmancık</MenuItem>
          <MenuItem value={"Inegol"}>İnegöl</MenuItem>
          <MenuItem value={"İznik"}>İznik</MenuItem>
          <MenuItem value={"Karacabey"}>Karacabey</MenuItem>
          <MenuItem value={"Keles"}>Keles</MenuItem>
          <MenuItem value={"Kestel"}>Kestel</MenuItem>
          <MenuItem value={"Mudanya"}>Mudanya</MenuItem>
          <MenuItem value={"MustafaKemalPaşa"}>MustafaKemalPaşa</MenuItem>
          <MenuItem value={"Nilufer"}>Nilüfer</MenuItem>
          <MenuItem value={"Orhaneli"}>Orhaneli</MenuItem>
          <MenuItem value={"Orhangazi"}>Orhangazi</MenuItem>
          <MenuItem value={"Osmangazi"}>Osmangazi</MenuItem>
          <MenuItem value={"Yenişehir"}>Yenişehir</MenuItem>
          <MenuItem value={"Yıldırım"}>Yıldırım</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
