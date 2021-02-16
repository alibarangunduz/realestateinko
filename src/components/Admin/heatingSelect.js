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

export default function HeatingSelect({
  id,
  labelId,
  label,
  heating,
  setHeating,
  labelName,
}) {
  const classes = useStyles();

  const handleHeatingSelect = (event) => {
    setHeating(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id={labelId}>{labelName}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          value={heating}
          onChange={handleHeatingSelect}
          label={label}
        >
          <MenuItem value={"Yok"}>Yok</MenuItem>
          <MenuItem value={"Soba"}>Soba</MenuItem>
          <MenuItem value={"DogalGazSobasi"}>Doğalgaz Sobası</MenuItem>
          <MenuItem value={"KatKaloriferi"}>Kat Kaloriferi</MenuItem>
          <MenuItem value={"Merkezi"}>Merkezi</MenuItem>
          <MenuItem value={"MerkeziPayOlcer"}>Merkezi Pay Ölçer</MenuItem>
          <MenuItem value={"DogalgazKombi"}>Doğalgaz Kombi</MenuItem>
          <MenuItem value={"YerdenIsitma"}>Yerden Isıtma</MenuItem>
          <MenuItem value={"Klima"}>Klima</MenuItem>
          <MenuItem value={"FancoilUnitesi"}>Fancoil Unitesi</MenuItem>
          <MenuItem value={"GunesEnerjisi"}>Güneş Enerjisi</MenuItem>
          <MenuItem value={"Jeotermal"}>Jeotermal</MenuItem>
          <MenuItem value={"Somine"}>Şomine</MenuItem>
          <MenuItem value={"VRV"}>VRV</MenuItem>
          <MenuItem value={"IsiPompasi"}>Isı Pompası</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
