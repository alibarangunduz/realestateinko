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

export default function Neighborhood({
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
          <h5>BüyükOrhan</h5>
          <MenuItem value={"Armutçuk Mh."}>Armutçuk Mh.</MenuItem>
          <MenuItem value={"Cumhuriyet Mah"}>Cumhuriyet Mah</MenuItem>
          <MenuItem value={"Hocahasan Mh."}>Hocahasan Mh.</MenuItem>
          <MenuItem value={"İsmetiye Mh."}>İsmetiye Mh.</MenuItem>
          <MenuItem value={"Orhan Mah."}>Orhan Mah.</MenuItem>
          <h5>Köyler</h5>
          <MenuItem value={"Akçasaz Mh."}>Akçasaz Mh.</MenuItem>
          <MenuItem value={"Aktaş Mh."}>Aktaş Mh.</MenuItem>
          <MenuItem value={"Bademlik Mh."}>Bademlik Mh.</MenuItem>
          <MenuItem value={"Balban Köyü"}>Balban Köyü</MenuItem>
          <MenuItem value={"Bayındır Mh."}>Bayındır Mh.</MenuItem>
          <MenuItem value={"Burunca Köyü"}>Burunca Köyü</MenuItem>
          <MenuItem value={"Çakıryenice Mh."}>Çakıryenice Mh.</MenuItem>
          <MenuItem value={"Çeribaşı Mh."}>Çeribaşı Mh.</MenuItem>
          <MenuItem value={"Danacılar Mh."}>Danacılar Mh.</MenuItem>
          <MenuItem value={"Danaçalı Mh."}>Danaçalı Mh.</MenuItem>
          <MenuItem value={"Demirler Köyü"}>Demirler Köyü</MenuItem>
          <MenuItem value={"Derecik Köyü"}>Derecik Köyü</MenuItem>
          <MenuItem value={"Durhasan Mh."}>Durhasan Mh.</MenuItem>
          <MenuItem value={"Düğüncüler Mh."}>Düğüncüler Mh.</MenuItem>
          <MenuItem value={"Elekçalı Mh."}>Elekçalı Mh.</MenuItem>
          <MenuItem value={"Ericek Köyü"}>Ericek Köyü</MenuItem>
          <MenuItem value={"Geynik Köyü"}>Geynik Köyü</MenuItem>
          <MenuItem value={"Hacıahmetler Mh."}>Hacıahmetler Mh.</MenuItem>
          <MenuItem value={"Hacılar Mh."}>Hacılar Mh.</MenuItem>
          <MenuItem value={"Hemşeriler Mh."}>Hemşeriler Mh.</MenuItem>
          <MenuItem value={"Karaağız Mh."}>Karaağız Mh.</MenuItem>
          <MenuItem value={"Karaçukur Mh."}>Karaçukur Mh.</MenuItem>
          <MenuItem value={"Karalar Köyü"}>Karalar Köyü</MenuItem>
          <MenuItem value={"Kayapa Köyü"}>Kayapa Köyü</MenuItem>
          <MenuItem value={"Kınık Mh."}>Kınık Mh.</MenuItem>
          <MenuItem value={"Kuşlar Mh."}>Kuşlar Mh.</MenuItem>
          <MenuItem value={"Mazlumlar Köyü"}>Mazlumlar Köyü</MenuItem>
          <MenuItem value={"Osmanlar Köyü"}>Osmanlar Köyü</MenuItem>
          <MenuItem value={"Örencik Mh."}>Örencik Mh.</MenuItem>
          <MenuItem value={"Özlüce Mh."}>Özlüce Mh.</MenuItem>
          <MenuItem value={"Perçin Mh."}>Perçin Mh.</MenuItem>
          <MenuItem value={"Pınarköy Mh."}>Pınarköy Mh.</MenuItem>
          <MenuItem value={"Pirebeyler Mh."}>Pirebeyler Mh.</MenuItem>
          <MenuItem value={"Sarnıç Mh."}>Sarnıç Mh.</MenuItem>
          <MenuItem value={"Tekerler Köyü"}>Tekerler Köyü</MenuItem>
          <MenuItem value={"Yeniçe Köyü"}>Yeniçe Köyü</MenuItem>
          <MenuItem value={"Zaferiye Köyü"}>Zaferiye Köyü</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
