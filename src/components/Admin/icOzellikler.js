import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Checkboxes from "./checkBox";
import { FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function IcOzellikler({
  adsl,
  setAdsl,
  ahsapDograma,
  setAhsapDograma,
  akilliEv,
  setAkilliEv,
  alarmh,
  setAlarmh,
  alarmy,
  setAlarmy,
  alaturkaTuvalet,
  setAlaturkaTuvalet,
  alimunyumDograma,
  setAlimunyumDograma,
  amerikanKapi,
  setAmerikanKapi,
  amerikanMutfak,
  setAmerikanMutfak,
  ankastreFirin,
  setAnkastreFirin,
  asansor,
  setAsansor,
  barbeku,
  setBarbeku,
  beyazEsya,
  setBeyazEsya,
  boyali,
  setBoyali,
  bulasikMakinesi,
  setBulasikMakinesi,
  buzdolabi,
  setBuzdolabi,
  duvarkagidi,
  setDuvarkagidi,
  dusakabin,
  setDusakabin,
  ebeveynBanyosu,
  setEbeveynBanyosu,
  fiberinternet,
  setFiberinternet,
  firin,
  setFirin,
  giyinmeOdasi,
  setGiyinmeOdasi,
  gommeDolap,
  setGommeDolap,
  goruntuluDiafon,
  setGoruntuluDiafon,
  hiltonBanyo,
  setHiltonBanyo,
  intercomSistemi,
  setIntercomSistemi,
  isicam,
  setIsicam,
  jakuzi,
  setJakuzi,
  kartonpiyer,
  setKartonpiyer,
  kiler,
  setKiler,
  klima,
  setKlima,
  kuvet,
  setKuvet,
  laminatZemin,
  setLaminatZemin,
  marley,
  setMarley,
  mobilya,
  setMobilya,
  mutfakAnkastre,
  setMutfakAnkastre,
  mutfakLaminat,
  setMutfakLaminat,
  mutfakDogalGazi,
  setMutfakDogalGazi,
  pvcdograma,
  setPvcDograma,
  panjur,
  setPanjur,
  parkeZemin,
  setParkeZemin,
  seramikZemin,
  setSeramikZemin,
  setUstuOcak,
  setSetUstuOcak,
  spotAydinlatma,
  setSpotAydinlatma,
  teras,
  setTeras,
  termosifon,
  setTermosifon,
  vestiyer,
  setVestiyer,
  wifi,
  setWifi,
  yuzTanimaParmakIzi,
  setYuzTanimaParmakIzi,
  camasirKurutmaMakinesi,
  setCamasirKurutmaMakinesi,
  camasirMakinesi,
  setCamasirMakinesi,
  camasirOdasi,
  setCamasirOdasi,
  celikKapi,
  setCelikKapi,
  sofben,
  setSofben,
  somine,
  setSomine,
}) {
  const classes = useStyles();
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <FormControlLabel
            value="adsl"
            control={<Checkboxes checked={adsl} setChecked={setAdsl} />}
            label="ADSL"
            labelPlacement="ADSL"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="AhsapDograma"
            control={
              <Checkboxes checked={ahsapDograma} setChecked={setAhsapDograma} />
            }
            label="Ahşap Doğrama"
            labelPlacement="Ahsap Doğrama"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="akilliEv"
            control={<Checkboxes checked={akilliEv} setChecked={setAkilliEv} />}
            label="Akilli Ev"
            labelPlacement="setAkilliEv"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="Alarmh"
            control={<Checkboxes checked={alarmh} setChecked={setAlarmh} />}
            label="Alarm Hırsız"
            labelPlacement="Alarmh"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="alarmy"
            control={<Checkboxes checked={alarmy} setChecked={setAlarmy} />}
            label="Alarm Yangın"
            labelPlacement="alarmy"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="alaturkaTuvalet"
            control={
              <Checkboxes
                checked={alaturkaTuvalet}
                setChecked={setAlaturkaTuvalet}
              />
            }
            label="Alaturka Tuvalet"
            labelPlacement="alaturkaTuvalet"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="alimunyumDograma"
            control={
              <Checkboxes
                checked={alimunyumDograma}
                setChecked={setAlimunyumDograma}
              />
            }
            label="Alimunyum Doğrama "
            labelPlacement="Ahsap Doğrama"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="amerikanKapi"
            control={
              <Checkboxes checked={amerikanKapi} setChecked={setAmerikanKapi} />
            }
            label="Amerikan Kapı"
            labelPlacement="amerikanKapi"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="amerikanMutfak"
            control={
              <Checkboxes
                checked={amerikanMutfak}
                setChecked={setAmerikanMutfak}
              />
            }
            label="Amerikan Mutfak"
            labelPlacement="amerikanMutfak"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="ankastreFirin"
            control={
              <Checkboxes
                checked={ankastreFirin}
                setChecked={setAnkastreFirin}
              />
            }
            label="Ankastre Fırın"
            labelPlacement="ankastreFirin"
          />
        </Grid>

        <Grid item xs={3}>
          <FormControlLabel
            value="asansor"
            control={<Checkboxes checked={asansor} setChecked={setAsansor} />}
            label="Asansör"
            labelPlacement="asansor"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="barbeku"
            control={<Checkboxes checked={barbeku} setChecked={setBarbeku} />}
            label="Barbeku"
            labelPlacement="barbeku"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="beyazEsya"
            control={
              <Checkboxes checked={beyazEsya} setChecked={setBeyazEsya} />
            }
            label="Beyaz Eşya"
            labelPlacement="beyazEsya"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="boyali"
            control={<Checkboxes checked={boyali} setChecked={setBoyali} />}
            label="Boyalı"
            labelPlacement="boyali"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="bulasikMakinesi"
            control={
              <Checkboxes
                checked={bulasikMakinesi}
                setChecked={setBulasikMakinesi}
              />
            }
            label="Bulasık Makinesi"
            labelPlacement="bulasikMakinesi"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="buzdolabi"
            control={
              <Checkboxes checked={buzdolabi} setChecked={setBuzdolabi} />
            }
            label="Buzdolabı"
            labelPlacement="buzdolabi"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="duvarkagidi"
            control={
              <Checkboxes checked={duvarkagidi} setChecked={setDuvarkagidi} />
            }
            label="Duvarkagıdı"
            labelPlacement="duvarkagidi"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="dusakabin"
            control={
              <Checkboxes checked={dusakabin} setChecked={setDusakabin} />
            }
            label="Dusakabin"
            labelPlacement="dusakabin"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="ebeveynBanyosu"
            control={
              <Checkboxes
                checked={ebeveynBanyosu}
                setChecked={setEbeveynBanyosu}
              />
            }
            label="Ebeveyn Banyosu"
            labelPlacement="ebeveynBanyosu"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="fiberinternet"
            control={
              <Checkboxes
                checked={fiberinternet}
                setChecked={setFiberinternet}
              />
            }
            label="Fiber Internet"
            labelPlacement="fiberinternet"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="firin"
            control={<Checkboxes checked={firin} setChecked={setFirin} />}
            label="Fırın"
            labelPlacement="firin"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="giyinmeOdasi"
            control={
              <Checkboxes checked={giyinmeOdasi} setChecked={setGiyinmeOdasi} />
            }
            label="Giyinme Odası"
            labelPlacement="giyinmeOdasi"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="gommeDolap"
            control={
              <Checkboxes checked={gommeDolap} setChecked={setGommeDolap} />
            }
            label="Gömme Dolap"
            labelPlacement="gommeDolap"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="goruntuluDiafon"
            control={
              <Checkboxes
                checked={goruntuluDiafon}
                setChecked={setGoruntuluDiafon}
              />
            }
            label="Görüntülü Diafon"
            labelPlacement="goruntuluDiafon"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="hiltonBanyo"
            control={
              <Checkboxes checked={hiltonBanyo} setChecked={setHiltonBanyo} />
            }
            label="Hilton Banyo"
            labelPlacement="hiltonBanyo"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="intercomSistemi"
            control={
              <Checkboxes
                checked={intercomSistemi}
                setChecked={setIntercomSistemi}
              />
            }
            label="intercom Sistemi"
            labelPlacement="intercomSistemi"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="isicam"
            control={<Checkboxes checked={isicam} setChecked={setIsicam} />}
            label="Isıcam"
            labelPlacement="isicam"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="jakuzi"
            control={<Checkboxes checked={jakuzi} setChecked={setJakuzi} />}
            label="Jakuzi"
            labelPlacement="jakuzi"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="kartonpiyer"
            control={
              <Checkboxes checked={kartonpiyer} setChecked={setKartonpiyer} />
            }
            label="Kartonpiyer"
            labelPlacement="kartonpiyer"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="kiler"
            control={<Checkboxes checked={kiler} setChecked={setKiler} />}
            label="Kiler"
            labelPlacement="kiler"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="klima"
            control={<Checkboxes checked={klima} setChecked={setKlima} />}
            label="Klima"
            labelPlacement="klima"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="kuvet"
            control={<Checkboxes checked={kuvet} setChecked={setKuvet} />}
            label="küvet"
            labelPlacement="kuvet"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="laminatZemin"
            control={
              <Checkboxes checked={laminatZemin} setChecked={setLaminatZemin} />
            }
            label="laminat Zemin"
            labelPlacement="laminatZemin"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="marley"
            control={<Checkboxes checked={marley} setChecked={setMarley} />}
            label="Marley"
            labelPlaement="marley"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="mobilya"
            control={<Checkboxes checked={mobilya} setChecked={setMobilya} />}
            label="Mobilya"
            labelPlacement="mobilya"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="mutfakAnkastre"
            control={
              <Checkboxes
                checked={mutfakAnkastre}
                setChecked={setMutfakAnkastre}
              />
            }
            label="Mutfak Ankastre"
            labelPlacement="mutfakAnkastre"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="mutfakLaminat"
            control={
              <Checkboxes
                checked={mutfakLaminat}
                setChecked={setMutfakLaminat}
              />
            }
            label="Mutfak Laminat"
            labelPlacement="mutfakLaminat"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="mutfakDogalGazi"
            control={
              <Checkboxes
                checked={mutfakDogalGazi}
                setChecked={setMutfakDogalGazi}
              />
            }
            label="Mutfak DogalGazi"
            labelPlacement="mutfakDogalGazi"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="pvcdograma"
            control={
              <Checkboxes checked={pvcdograma} setChecked={setPvcDograma} />
            }
            label="PVC Doğrama"
            labelPlacement="pvcdograma"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="panjur"
            control={<Checkboxes checked={panjur} setChecked={setPanjur} />}
            label="Panjur"
            labelPlacement="panjur"
          />
        </Grid>

        <Grid item xs={3}>
          <FormControlLabel
            value="parkeZemin"
            control={
              <Checkboxes checked={parkeZemin} setChecked={setParkeZemin} />
            }
            label="Parke Zemin"
            labelPlacement="parkeZemin"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="seramikZemin"
            control={
              <Checkboxes checked={seramikZemin} setChecked={setSeramikZemin} />
            }
            label="Seramik Zemin"
            labelPlacement="seramikZemin"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="setUstuOcak"
            control={
              <Checkboxes checked={setUstuOcak} setChecked={setSetUstuOcak} />
            }
            label="Set Üstü Ocak"
            labelPlacement="setUstuOcak"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="spotAydinlatma"
            control={
              <Checkboxes
                checked={spotAydinlatma}
                setChecked={setSpotAydinlatma}
              />
            }
            label="Spot Aydınlatma"
            labelPlacement="mutfakAnkastre"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="teras"
            control={<Checkboxes checked={teras} setChecked={setTeras} />}
            label="Teras"
            labelPlacement="teras"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="termosifon"
            control={
              <Checkboxes checked={termosifon} setChecked={setTermosifon} />
            }
            label="Termosifon"
            labelPlacement="termosifon"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="vestiyer"
            control={<Checkboxes checked={vestiyer} setChecked={setVestiyer} />}
            label="Vestiyer"
            labelPlacement="vestiyer"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="wifi"
            control={<Checkboxes checked={wifi} setChecked={setWifi} />}
            label="wifi"
            labelPlacement="wifi"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="yuzTanimaParmakIzi"
            control={
              <Checkboxes
                checked={yuzTanimaParmakIzi}
                setChecked={setYuzTanimaParmakIzi}
              />
            }
            label="Yüztanıma & Parmak İzi"
            labelPlacement="yuzTanimaParmakIzi"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="camasirKurutmaMakinesi"
            control={
              <Checkboxes
                checked={camasirKurutmaMakinesi}
                setChecked={setCamasirKurutmaMakinesi}
              />
            }
            label="Çamaşır Kurutma Makinesi"
            labelPlacement="camasirKurutmaMakinesi"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="camasirMakinesi"
            control={
              <Checkboxes
                checked={camasirMakinesi}
                setChecked={setCamasirMakinesi}
              />
            }
            label="Çamaşır Makinesi"
            labelPlacement="camasirMakinesi"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="camasirOdasi"
            control={
              <Checkboxes checked={camasirOdasi} setChecked={setCamasirOdasi} />
            }
            label="Çamasır Odası"
            labelPlacement="camasirOdasi"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="celikKapi"
            control={
              <Checkboxes checked={celikKapi} setChecked={setCelikKapi} />
            }
            label="Çelik Kapı"
            labelPlacement="celikKapi"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="sofben"
            control={<Checkboxes checked={sofben} setChecked={setSofben} />}
            label="Şofben"
            labelPlacement="sofben"
          />
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            value="somine"
            control={<Checkboxes checked={somine} setChecked={setSomine} />}
            label="Şomine"
            labelPlacement="somine"
          />
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
