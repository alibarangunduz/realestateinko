import React, { useState } from "react";
import SimpleSelect from "../simpleselect";
import BasicTextFields from "../inputs";
import MultilineTextFields from "../multiLine";
import InputAdornments from "../amount";
import CheckIcon from "@material-ui/icons/Check";
import SelectForProperty from "../selectForProperty";
import { AdminContainer, InnerContainer } from "../AdminElements";
import BuldingAge from "../buildingAge";
import FloorLocation from "../floorLocation";
import NumberOfFloors from "../numberOfFloors";
import HeatingSelect from "../heatingSelect";
import NumberOfBaths from "../numberOfBaths";
import Balcony from "../balcony";
import Checkboxes from "../checkBox";
import Province from "../province";
import { AdressInputs } from "../AdessInputs";
import District from "../district";
import Neighborhood from "../neighborhood";
import Gemlik from "../gemlik";
import GoogleMap from "../../GoogleMap";
import FirebaseFileUpload from "../../FirebaseFileUpload";
import NumberFormat from "react-number-format";
import UsingStatus from "../usingStatus";
import SimpleAccordion from "../accordion";
import Cephe from "../cephe";
import IcOzellikler from "../icOzellikler";

const IlanVer = () => {
  //kategori secimi
  const [emlakTipi, setEmlakTipi] = useState("");
  const [satilik, setSatilik] = useState("");
  const [daire, setDaire] = useState("");
  //bilgiler
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  const [amount, setAmount] = useState("");
  const [m2, setM2] = useState("");
  const [m2Net, setM2Net] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [BuildingAge, setBuildingAge] = useState("");
  const [floorLocaiton, setFloorLocation] = useState("");
  const [numberOfFloors, setNumberOfFloors] = useState("");
  const [heating, setHeating] = useState("");
  const [numberOfBath, setNumberOfBath] = useState("");
  const [isBalcony, setBalcony] = useState("");
  const [checkedCredit, setcheckedCredit] = useState("");
  const [checkedIsSwap, setcheckedIsSwap] = useState("");
  const [aidat, setAidat] = useState("");
  const [depozito, setDepozito] = useState("");
  const [usingStatus, setUsingStatus] = useState("");
  const [esyali, setEsyali] = useState("");
  //adress
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [neighborhood, setNeighborhood] = useState("");

  //cepheler
  const [bati, setBati] = useState(false);
  const [dogu, setDogu] = useState(false);
  const [guney, setGuney] = useState(false);
  const [kuzey, setKuzey] = useState(false);
  //konut icin detaylar
  const [adsl, setAdsl] = useState(false);
  const [ahsapDograma, setAhsapDograma] = useState(false);
  const [akilliEv, setAkilliEv] = useState(false);
  const [alarmh, setAlarmh] = useState(false);
  const [alarmy, setAlarmy] = useState(false);
  const [alaturkaTuvalet, setAlaturkaTuvalet] = useState(false);
  const [alimunyumDograma, setAlimunyumDograma] = useState(false);
  const [amerikanKapi, setAmerikanKapi] = useState(false);
  const [amerikanMutfak, setAmerikanMutfak] = useState(false);
  const [ankastreFirin, setAnkastreFirin] = useState(false);
  const [asansor, setAsansor] = useState(false);
  const [barbeku, setBarbeku] = useState(false);
  const [beyazEsya, setBeyazEsya] = useState(false);
  const [boyali, setBoyali] = useState(false);
  const [bulasikMakinesi, setBulasikMakinesi] = useState(false);
  const [buzdolabi, setBuzdolabi] = useState(false);
  const [duvarkagidi, setDuvarkagidi] = useState(false);
  const [dusakabin, setDusakabin] = useState(false);
  const [ebeveynBanyosu, setEbeveynBanyosu] = useState(false);
  const [fiberinternet, setFiberinternet] = useState(false);
  const [firin, setFirin] = useState(false);
  const [giyinmeOdasi, setGiyinmeOdasi] = useState(false);
  const [gommeDolap, setGommeDolap] = useState(false);
  const [goruntuluDiafon, setGoruntuluDiafon] = useState(false);
  const [hiltonBanyo, setHiltonBanyo] = useState(false);
  const [intercomSistemi, setIntercomSistemi] = useState(false);
  const [isicam, setIsicam] = useState(false);
  const [jakuzi, setJakuzi] = useState(false);
  const [kartonpiyer, setKartonpiyer] = useState(false);
  const [kiler, setKiler] = useState(false);
  const [klima, setKlima] = useState(false);
  const [kuvet, setKuvet] = useState(false);
  const [laminatZemin, setLaminatZemin] = useState(false);
  const [marley, setMarley] = useState(false);
  const [mobilya, setMobilya] = useState(false);
  const [mutfakAnkastre, setMutfakAnkastre] = useState(false);
  const [mutfakLaminat, setMutfakLaminat] = useState(false);
  const [mutfakDogalGazi, setMutfakDogalGazi] = useState(false);
  const [pvcdograma, setPvcDograma] = useState(false);
  const [panjur, setPanjur] = useState(false);
  const [parkeZemin, setParkeZemin] = useState(false);
  const [seramikZemin, setSeramikZemin] = useState(false);
  const [setUstuOcak, setSetUstuOcak] = useState(false);
  const [spotAydinlatma, setSpotAydinlatma] = useState(false);
  const [teras, setTeras] = useState(false);
  const [termosifon, setTermosifon] = useState(false);
  const [vestiyer, setVestiyer] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [yuzTanimaParmakIzi, setYuzTanimaParmakIzi] = useState(false);
  const [camasirKurutmaMakinesi, setCamasirKurutmaMakinesi] = useState(false);
  const [camasirMakinesi, setCamasirMakinesi] = useState(false);
  const [camasirOdasi, setCamasirOdasi] = useState(false);
  const [celikKapi, setCelikKapi] = useState(false);
  const [sofben, setSofben] = useState(false);
  const [somine, setSomine] = useState(false);

  const checkKategori = () => {
    if ((emlakTipi === "Arsa" || emlakTipi === "Bina") && satilik !== "") {
      return (
        <div>
          Kategori Tamamlanmistir <CheckIcon />
        </div>
      );
    }
    if (emlakTipi !== "" && satilik !== "" && daire !== "") {
      return (
        <div>
          Kategori Tamamlanmistir <CheckIcon />
        </div>
      );
    }
  };

  const handleListingDetails = () => {
    if (emlakTipi === "Konut") {
      switch (satilik) {
        case "Satilik":
          switch (daire) {
            case "Daire":
            case "Residance":
            case "MustakilEv":
            case "Villa":
              return (
                <>
                  <SelectForProperty
                    id="roomNumber"
                    labelId="roomNumberLabelId"
                    label="roomNumberLabel"
                    roomNumber={roomNumber}
                    setRoomNumber={setRoomNumber}
                    labelName="Oda Sayısı"
                  />
                  <BuldingAge
                    id="BuildingAge"
                    labelId="BuildingAgeLabelId"
                    label="BuildingAgeLabel"
                    roomNumber={BuildingAge}
                    setRoomNumber={setBuildingAge}
                    labelName="Bina Yaşı"
                  />
                  <FloorLocation
                    id="FloorLocaiton"
                    labelId="FloorLocaitonLabelId"
                    label="FloorLocaitonLabel"
                    roomNumber={floorLocaiton}
                    setRoomNumber={setFloorLocation}
                    labelName="Kat"
                  />
                  <NumberOfFloors
                    id="NumberOfFloors"
                    labelId="NumberOfFloorsLabelId"
                    label="NumberOfFloorsLabel"
                    roomNumber={numberOfFloors}
                    setRoomNumber={setNumberOfFloors}
                    labelName="Kat Sayısı"
                  />
                  <HeatingSelect
                    id="HeatingSelect"
                    labelId="HeatingSelectLabelId"
                    label="HeatingSelectLabel"
                    heating={heating}
                    setHeating={setHeating}
                    labelName="Isıtma"
                  />
                  <NumberOfBaths
                    id="NumberOfBaths"
                    labelId="NumberOfBathsLabelId"
                    label="NumberOfBathsLabel"
                    numberOfBath={numberOfBath}
                    setNumberOfBath={setNumberOfBath}
                    labelName="Banyo Sayisi"
                  />
                  <Balcony
                    id="isThereBalcony"
                    labelId="isThereBalconyLabelId"
                    label="isThereBalconyLabel"
                    isBalcony={isBalcony}
                    setBalcony={setBalcony}
                    labelName="Balkon"
                  />
                  <UsingStatus
                    id="usingStatus"
                    labelId="usingStatusLabelId"
                    label="usingStatusLabelId"
                    usingStatus={usingStatus}
                    setUsingStatus={setUsingStatus}
                    labelName="Kullanım Durumu"
                  />
                  <p>Esyali</p>
                  <Checkboxes checked={esyali} setChecked={setEsyali} />
                  <p>Krediye Uygun</p>
                  <Checkboxes
                    checked={checkedCredit}
                    setChecked={setcheckedCredit}
                  />
                  <InputAdornments
                    amount={depozito}
                    setAmount={setDepozito}
                    header="Depozito"
                    subtitle="TL"
                    id="depozito"
                  />
                  <p>Takaslı</p>
                  <Checkboxes
                    checked={checkedIsSwap}
                    setChecked={setcheckedIsSwap}
                  />
                  <InputAdornments
                    amount={aidat}
                    setAmount={setAidat}
                    header="Aidat"
                    subtitle="TL"
                    id="aidat"
                  />
                  <h1>Detaylı Bilgiler</h1>
                  <SimpleAccordion header="Cephe">
                    <Cephe
                      bati={bati}
                      setBati={setBati}
                      dogu={dogu}
                      setDogu={setDogu}
                      guney={guney}
                      setGuney={setGuney}
                      kuzey={kuzey}
                      setKuzey={setKuzey}
                    />
                  </SimpleAccordion>
                  <SimpleAccordion header="İc Özellikler">
                    <IcOzellikler
                      adsl={adsl}
                      setAdsl={setAdsl}
                      ahsapDograma={ahsapDograma}
                      setAhsapDograma={setAhsapDograma}
                      akilliEv={akilliEv}
                      setAkilliEv={setAkilliEv}
                      alarmh={alarmh}
                      setAlarmh={setAlarmh}
                      alarmy={alarmy}
                      setAlarmy={setAlarmy}
                      alaturkaTuvalet={alaturkaTuvalet}
                      setAlaturkaTuvalet={setAlaturkaTuvalet}
                      alimunyumDograma={alimunyumDograma}
                      setAlimunyumDograma={setAlimunyumDograma}
                      amerikanKapi={amerikanKapi}
                      setAmerikanKapi={setAmerikanKapi}
                      amerikanMutfak={amerikanMutfak}
                      setAmerikanMutfak={setAmerikanMutfak}
                      ankastreFirin={ankastreFirin}
                      setAnkastreFirin={setAnkastreFirin}
                      asansor={asansor}
                      setAsansor={setAsansor}
                      barbeku={barbeku}
                      setBarbeku={setBarbeku}
                      beyazEsya={beyazEsya}
                      setBeyazEsya={setBeyazEsya}
                      boyali={boyali}
                      setBoyali={setBoyali}
                      bulasikMakinesi={bulasikMakinesi}
                      setBulasikMakinesi={setBulasikMakinesi}
                      buzdolabi={buzdolabi}
                      setBuzdolabi={setBuzdolabi}
                      duvarkagidi={duvarkagidi}
                      setDuvarkagidi={setDuvarkagidi}
                      dusakabin={dusakabin}
                      setDusakabin={setDusakabin}
                      ebeveynBanyosu={ebeveynBanyosu}
                      setEbeveynBanyosu={setEbeveynBanyosu}
                      fiberinternet={fiberinternet}
                      setFiberinternet={setFiberinternet}
                      firin={firin}
                      setFirin={setFirin}
                      giyinmeOdasi={giyinmeOdasi}
                      setGiyinmeOdasi={setGiyinmeOdasi}
                      gommeDolap={gommeDolap}
                      setGommeDolap={setGommeDolap}
                      goruntuluDiafon={goruntuluDiafon}
                      setGoruntuluDiafon={setGoruntuluDiafon}
                      hiltonBanyo={hiltonBanyo}
                      setHiltonBanyo={setHiltonBanyo}
                      intercomSistemi={intercomSistemi}
                      setIntercomSistemi={setIntercomSistemi}
                      isicam={isicam}
                      setIsicam={setIsicam}
                      jakuzi={jakuzi}
                      setJakuzi={setJakuzi}
                      kartonpiyer={kartonpiyer}
                      setKartonpiyer={setKartonpiyer}
                      kiler={kiler}
                      setKiler={setKiler}
                      klima={klima}
                      setKlima={setKlima}
                      kuvet={kuvet}
                      setKuvet={setKuvet}
                      laminatZemin={laminatZemin}
                      setLaminatZemin={setLaminatZemin}
                      marley={marley}
                      setMarley={setMarley}
                      mobilya={mobilya}
                      setMobilya={setMobilya}
                      mutfakAnkastre={mutfakAnkastre}
                      setMutfakAnkastre={setMutfakAnkastre}
                      mutfakLaminat={mutfakLaminat}
                      setMutfakLaminat={setMutfakLaminat}
                      mutfakDogalGazi={mutfakDogalGazi}
                      setMutfakDogalGazi={setMutfakDogalGazi}
                      pvcdograma={pvcdograma}
                      setPvcDograma={setPvcDograma}
                      panjur={panjur}
                      setPanjur={setPanjur}
                      parkeZemin={parkeZemin}
                      setParkeZemin={setParkeZemin}
                      seramikZemin={seramikZemin}
                      setSeramikZemin={setSeramikZemin}
                      setUstuOcak={setUstuOcak}
                      setSetUstuOcak={setSetUstuOcak}
                      spotAydinlatma={spotAydinlatma}
                      setSpotAydinlatma={setSpotAydinlatma}
                      teras={teras}
                      setTeras={setTeras}
                      termosifon={termosifon}
                      setTermosifon={setTermosifon}
                      vestiyer={vestiyer}
                      setVestiyer={setVestiyer}
                      wifi={wifi}
                      setWifi={setWifi}
                      yuzTanimaParmakIzi={yuzTanimaParmakIzi}
                      setYuzTanimaParmakIzi={setYuzTanimaParmakIzi}
                      camasirKurutmaMakinesi={camasirKurutmaMakinesi}
                      setCamasirKurutmaMakinesi={setCamasirKurutmaMakinesi}
                      camasirMakinesi={camasirMakinesi}
                      setCamasirMakinesi={setCamasirMakinesi}
                      camasirOdasi={camasirOdasi}
                      setCamasirOdasi={setCamasirOdasi}
                      celikKapi={celikKapi}
                      setCelikKapi={setCelikKapi}
                      sofben={sofben}
                      setSofben={setSofben}
                      somine={somine}
                      setSomine={setSomine}
                    />
                  </SimpleAccordion>
                </>
              );
            default:
              break;
          }
          break;
        case "Kiralik":
          switch (daire) {
            case "Daire":
              return (
                <>
                  <SelectForProperty
                    id="roomNumber"
                    labelId="roomNumberLabelId"
                    label="roomNumberLabel"
                    roomNumber={roomNumber}
                    setRoomNumber={setRoomNumber}
                    labelName="Oda Sayısı"
                  />
                  <BuldingAge
                    id="BuildingAge"
                    labelId="BuildingAgeLabelId"
                    label="BuildingAgeLabel"
                    roomNumber={BuildingAge}
                    setRoomNumber={setBuildingAge}
                    labelName="Bina Yaşı"
                  />
                  <FloorLocation
                    id="FloorLocaiton"
                    labelId="FloorLocaitonLabelId"
                    label="FloorLocaitonLabel"
                    roomNumber={floorLocaiton}
                    setRoomNumber={setFloorLocation}
                    labelName="Kat"
                  />
                  <NumberOfFloors
                    id="NumberOfFloors"
                    labelId="NumberOfFloorsLabelId"
                    label="NumberOfFloorsLabel"
                    roomNumber={numberOfFloors}
                    setRoomNumber={setNumberOfFloors}
                    labelName="Kat Sayısı"
                  />
                  <HeatingSelect
                    id="HeatingSelect"
                    labelId="HeatingSelectLabelId"
                    label="HeatingSelectLabel"
                    heating={heating}
                    setHeating={setHeating}
                    labelName="Isıtma"
                  />
                  <NumberOfBaths
                    id="NumberOfBaths"
                    labelId="NumberOfBathsLabelId"
                    label="NumberOfBathsLabel"
                    numberOfBath={numberOfBath}
                    setNumberOfBath={setNumberOfBath}
                    labelName="Banyo Sayisi"
                  />
                  <Balcony
                    id="isThereBalcony"
                    labelId="isThereBalconyLabelId"
                    label="isThereBalconyLabel"
                    isBalcony={isBalcony}
                    setBalcony={setBalcony}
                    labelName="Balkon"
                  />
                  <p>Esyali</p>
                  <Checkboxes
                    checked={checkedCredit}
                    setChecked={setcheckedCredit}
                  />
                  <UsingStatus
                    id="usingStatus"
                    labelId="usingStatusLabelId"
                    label="usingStatusLabelId"
                    usingStatus={usingStatus}
                    setUsingStatus={setUsingStatus}
                    labelName="Kullanım Durumu"
                  />
                  <InputAdornments
                    amount={aidat}
                    setAmount={setAidat}
                    header="Aidat"
                    subtitle="TL"
                    id="aidat"
                  />

                  <Cephe
                    bati={bati}
                    setBati={setBati}
                    dogu={dogu}
                    setDogu={setDogu}
                    guney={guney}
                    setGuney={setGuney}
                    kuzey={kuzey}
                    setKuzey={setKuzey}
                  />
                </>
              );

            default:
              break;
          }
          break;
        case "DevrenSatilikKonut":
          break;
        default:
          break;
      }
    }
  };

  const handleDistrict = () => {
    switch (province) {
      case "Bursa, Turkey":
        return (
          <District
            id="district"
            labelId="districtLabelId"
            label="districtLabelId"
            district={district}
            setDistrict={setDistrict}
            labelName="İlçe"
          />
        );
      case "Istanbul":
        break;
      case "Yalova":
        break;
      default:
        break;
    }
  };
  const handleNeighborhood = () => {
    if (province === "Bursa, Turkey") {
      switch (district) {
        case "BuyukOrhan":
          return (
            <Neighborhood
              id="neighborhood"
              labelId="neighborhoodLabelId"
              label="neighborhoodLabelId"
              neighborhood={neighborhood}
              setNeighborhood={setNeighborhood}
              labelName="Mahalle"
            />
          );
        case "Gemlik":
          return (
            <Gemlik
              id="neighborhood"
              labelId="neighborhoodLabelId"
              label="neighborhoodLabelId"
              neighborhood={neighborhood}
              setNeighborhood={setNeighborhood}
              labelName="Mahalle"
            />
          );
        default:
          break;
      }
    }
  };

  return (
    <AdminContainer>
      <InnerContainer>
        <h1>Ilan Temel Özellikleri</h1>
        <BasicTextFields title={title} setTitle={setTitle} />
        <MultilineTextFields
          explanation={explanation}
          setExplanation={setExplanation}
        />

        <InputAdornments
          amount={amount}
          setAmount={setAmount}
          header="Fiyat"
          subtitle="TL"
          id="amount"
          required
        />
        <NumberFormat
          value={amount}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"TL"}
          renderText={(value) => <div>{value}</div>}
        />
        <InputAdornments
          amount={m2}
          setAmount={setM2}
          header="m2 Brüt"
          id="m2"
        />
        <NumberFormat
          value={m2}
          displayType={"text"}
          thousandSeparator={true}
          prefix={""}
          renderText={(value) => <div>{value}</div>}
        />
        <InputAdornments
          amount={m2Net}
          setAmount={setM2Net}
          header="m2 Net"
          id="m2Net"
          requierd
        />
        <NumberFormat
          value={m2Net}
          displayType={"text"}
          thousandSeparator={true}
          prefix={""}
          renderText={(value) => <div>{value}</div>}
        />
        <h1>Kategori Secimi</h1>
        <SimpleSelect
          emlakTipi={emlakTipi}
          setEmlakTipi={setEmlakTipi}
          satilik={satilik}
          setSatilik={setSatilik}
          setDaire={setDaire}
          daire={daire}
        />
        {checkKategori()}
        <h1>Ilan Detaylari</h1>

        {handleListingDetails()}
        <h1>Ressim Yükle</h1>
        <FirebaseFileUpload />
        <h1>Adres Bilgileri</h1>
        <AdressInputs>
          <Province
            id="province"
            labelId="provinceLabelId"
            label="provinceLabelId"
            province={province}
            setProvince={setProvince}
            labelName="İl"
          />
          {handleDistrict()}
          {handleNeighborhood()}
        </AdressInputs>

        <h2>Bulunduğu konumu tıklayarak işaretliyin.</h2>
        <GoogleMap
          province={province}
          district={district}
          neighborhood={neighborhood}
        />
      </InnerContainer>
    </AdminContainer>
  );
};

export default IlanVer;
