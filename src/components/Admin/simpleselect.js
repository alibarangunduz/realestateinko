import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect({
  emlakTipi,
  setEmlakTipi,
  satilik,
  setSatilik,
  daire,
  setDaire,
}) {
  const classes = useStyles();

  const handleEmlakTipi = (event) => {
    setEmlakTipi(event.target.value);
  };
  const handleSatilikTipi = (event) => {
    setSatilik(event.target.value);
  };
  const handleDaireTipi = (event) => {
    setDaire(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="mulkTipiLabel">Mulk Tipi</InputLabel>
        <Select
          labelId="mulkTipiSelectLabel"
          id="mulkTipi"
          value={emlakTipi}
          onChange={handleEmlakTipi}
        >
          <MenuItem value={"Konut"}>Konut</MenuItem>
          <MenuItem value={"Isyeri"}>Isyeri</MenuItem>
          <MenuItem value={"Arsa"}>Arsa</MenuItem>
          <MenuItem value={"Bina"}>Bina</MenuItem>
          <MenuItem value={"DevreMulk"}>DevreMulk</MenuItem>
          <MenuItem value={"TuristikTesis"}>TuristikTesis</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="satilikLabel">Satılık</InputLabel>
        <Select
          labelId="satilikSelectLabel"
          id="satilik"
          value={satilik}
          onChange={handleSatilikTipi}
        >
          <MenuItem value={"Satilik"}>Satılık</MenuItem>
          <MenuItem value={"Kiralik"}>Kiralık</MenuItem>
          <MenuItem value={"DevrenSatilikKonut"}>Devren Satılık Konut</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="daireTipiLabel">Daire</InputLabel>
        <Select
          labelId="daireSelectTipiLabel"
          id="daireTipi"
          value={daire}
          onChange={handleDaireTipi}
        >
          <MenuItem value={"Konut"}>Konut</MenuItem>
          <MenuItem value={"Residance"}>Residance</MenuItem>
          <MenuItem value={"MustakilEv"}>Mustakil Ev</MenuItem>
          <MenuItem value={"Villa"}>Villa</MenuItem>
          <MenuItem value={"CiftlikEvi"}>Çiftlik Evi</MenuItem>
          <MenuItem value={"KoskKonak"}>Köşk veya Konak</MenuItem>
          <MenuItem value={"Yali"}>Yali</MenuItem>
          <MenuItem value={"YaliDairesi"}>YaliDairesi</MenuItem>
          <MenuItem value={"Arsa"}>Arsa</MenuItem>
          <MenuItem value={"Yazlik"}>Yazlik</MenuItem>
          <MenuItem value={"PrefabrikEv"}>Prefabrik Ev</MenuItem>
          <MenuItem value={"Kooperatif"}>Kooperatif</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
