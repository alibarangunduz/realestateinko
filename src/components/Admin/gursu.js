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

export default function Gemlik({
  id,
  labelId,
  label,
  neighborhood,
  setNeighborhood,
  labelName,
}) {
  const classes = useStyles();

  const handleNeighborhood = (event) => {
    setNeighborhood(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id={labelId}>{labelName}</InputLabel>
        <Select
          labelId={labelId}
          id={id}
          value={neighborhood}
          onChange={handleNeighborhood}
          label={label}
        >
          <h5>Gürsü</h5>
          <MenuItem value={"Adaköy Mh."}>Adaköy Mh.</MenuItem>
          <MenuItem value={"Ağaköy Mh."}>Ağaköy Mh.</MenuItem>
          <MenuItem value={"Hasanköy Mh."}>Hasanköy Mh.</MenuItem>
          <MenuItem value={"İpekyolu Mh."}>İpekyolu Mh.</MenuItem>
          <MenuItem value={"İstiklal Mh."}>İstiklal Mh.</MenuItem>
          <MenuItem value={"Kumlukalan Mh."}>Kumlukalan Mh.</MenuItem>
          <MenuItem value={"Kurtuluş Mh."}>Kurtuluş Mh.</MenuItem>
          <MenuItem value={"Kurtuluş OSB"}>Kurtuluş OSB</MenuItem>
          <MenuItem value={"Yenidoğa Mh."}>Yenidoğa Mh.</MenuItem>
          <MenuItem value={"Yenidoğan OSB"}>Yenidoğan OSB</MenuItem>
          <MenuItem value={"Zafer Mah."}>Zafer Mah.</MenuItem>
          <h5>Köyler</h5>
          <MenuItem value={"Canbazlarköyü Mh."}>Canbazlarköyü Mh.</MenuItem>
          <MenuItem value={"Büyükkumla Mh."}>Dışkayaköyü.</MenuItem>
          <MenuItem value={"Cihatlı Mh."}>Cihatlı Mh.</MenuItem>
          <MenuItem value={"Engürücük Mh."}>Engürücük Mh.</MenuItem>
          <MenuItem value={"Fevziye Köyü"}>Fevziye Köyü</MenuItem>
          <MenuItem value={"Fındıcak Mh."}>Fındıcak Mh.</MenuItem>
          <MenuItem value={"Gençli Mh."}>Gençli Mh.</MenuItem>
          <MenuItem value={"Güvenli Mh."}>Güvenli Mh.</MenuItem>
          <MenuItem value={"Hamidiyeköy Mh."}>Hamidiyeköy Mh.</MenuItem>
          <MenuItem value={"Haydariye Köyü"}>Haydariye Köyü</MenuItem>
          <MenuItem value={"Karacaali Köyü"}>Karacaali Köyü</MenuItem>
          <MenuItem value={"Karacaali Köyü"}>Katırlı Mh.</MenuItem>
          <MenuItem value={"Kurtlu Köyü"}>Kurtlu Köyü</MenuItem>
          <MenuItem value={"Kurtlu Köyü"}>Muratoba Köyü</MenuItem>
          <MenuItem value={"Narlı Mh."}>Narlı Mh.</MenuItem>
          <MenuItem value={"Şahinyurdu Mh."}>Şahinyurdu Mh.</MenuItem>
          <MenuItem value={"Şükriye Mh."}>Şükriye Mh.</MenuItem>
          <MenuItem value={"Yeniköy Mh."}>Yeniköy Mh.</MenuItem>
          <h5>Kurşunlu</h5>
          <MenuItem value={"Osmanlar Köyü"}>Gençli Mh.</MenuItem>
          <MenuItem value={"Kurşunlu Mh."}>Kurşunlu Mh.</MenuItem>
          <h5>Küçükkumla</h5>
          <MenuItem value={"Kumla Mh."}>Kumla Mh.</MenuItem>
          <MenuItem value={"Küçükkumla Mh."}>Küçükkumla Mh.</MenuItem>
          <h5>Umrubey</h5>
          <MenuItem value={"Umurbey Orhaniye Mah."}>
            Umurbey Orhaniye Mah.
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
