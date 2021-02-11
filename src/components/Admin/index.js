import React, { useState } from "react";
import SimpleSelect from "./simpleselect";
import BasicTextFields from "./inputs";
import MultilineTextFields from "./multiLine";
import InputAdornments from "./amount";
import CurrencyInput from "react-currency-input";
import SelectForProperty from "./selectForProperty";
import { AdminContainer } from "./AdminElements";
import BuldingAge from "./buildingAge";
import FloorLocation from "./floorLocation";
import NumberOfFloors from "./numberOfFloors";

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
  console.log(floorLocaiton);
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
      />
      <InputAdornments amount={m2} setAmount={setM2} header="m2 Brüt" id="m2" />
      <InputAdornments
        amount={m2Net}
        setAmount={setM2Net}
        header="m2 Net"
        id="m2Net"
      />
      <p></p>

      <BuldingAge
        id="BuildingAge"
        labelId="BuildingAgeLabelId"
        label="BuildingAgeLabel"
        roomNumber={BuildingAge}
        setRoomNumber={setBuildingAge}
        labelName="Bina Yaşı"
      />
      <SelectForProperty
        id="roomNumber"
        labelId="roomNumberLabelId"
        label="roomNumberLabel"
        roomNumber={roomNumber}
        setRoomNumber={setRoomNumber}
        labelName="Oda Numarası"
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
    </AdminContainer>
  );
};

export default Admin;
