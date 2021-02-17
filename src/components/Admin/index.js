import React, { useState } from "react";
import SimpleSelect from "./simpleselect";
import BasicTextFields from "./inputs";
import MultilineTextFields from "./multiLine";
import InputAdornments from "./amount";
import CheckIcon from "@material-ui/icons/Check";
import SelectForProperty from "./selectForProperty";
import { AdminContainer } from "./AdminElements";
import BuldingAge from "./buildingAge";
import FloorLocation from "./floorLocation";
import NumberOfFloors from "./numberOfFloors";
import HeatingSelect from "./heatingSelect";
import NumberOfBaths from "./numberOfBaths";
import Balcony from "./balcony";
import Checkboxes from "./checkBox";
import Province from "./province";
import { AdressInputs } from "./AdessInputs";
import District from "./district";
import Neighborhood from "./neighborhood";
import Gemlik from "./gemlik";
import GoogleMap from "../GoogleMap";
import FirebaseFileUpload from "../FirebaseFileUpload";
import NumberFormat from "react-number-format";
import UsingStatus from "./usingStatus";

const Admin = () => {
  const [emlakTipi, setEmlakTipi] = useState("");
  const [satilik, setSatilik] = useState("");
  const [daire, setDaire] = useState("");
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
  const [checkedVideoCall, setCheckedVideoCall] = useState("");
  const [checkedIsSwap, setcheckedIsSwap] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [usingStatus, setUsingStatus] = useState("");
  const [aidat, setAidat] = useState("");
  const [depozito, setDepozito] = useState("");

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
                  <p>Krediye Uygun</p>
                  <Checkboxes
                    checked={checkedCredit}
                    setChecked={setcheckedCredit}
                  />
                  <p>Takaslı</p>
                  <Checkboxes
                    checked={checkedIsSwap}
                    setChecked={setcheckedIsSwap}
                  />
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
                  <InputAdornments
                    amount={depozito}
                    setAmount={setDepozito}
                    header="Depozito"
                    subtitle="TL"
                    id="depozito"
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
  console.log(satilik);
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
    <AdminContainer style={{ padding: "10px" }}>
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
      <InputAdornments amount={m2} setAmount={setM2} header="m2 Brüt" id="m2" />
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
      {handleListingDetails()}
      <p>Görüntülü Arama İle Gezilebilir</p>
      <Checkboxes checked={checkedVideoCall} setChecked={setCheckedVideoCall} />

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
    </AdminContainer>
  );
};

export default Admin;
