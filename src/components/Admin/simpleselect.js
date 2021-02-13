import React, { useEffect, useState } from "react";
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
  const handlePropertyType = () => {
    switch (emlakTipi) {
      case "Konut":
        return (
          <Select
            labelId="satilikSelectLabel"
            id="satilik"
            value={satilik}
            onChange={handleSatilikTipi}
          >
            <MenuItem value={"Satilik"}>Satılık</MenuItem>
            <MenuItem value={"Kiralik"}>Kiralık</MenuItem>
            <MenuItem value={"DevrenSatilikKonut"}>
              Devren Satılık Konut
            </MenuItem>
          </Select>
        );

      case "Isyeri":
        return (
          <Select
            labelId="satilikSelectLabel"
            id="satilik"
            value={satilik}
            onChange={handleSatilikTipi}
          >
            <MenuItem value={"Satilik"}>Satılık</MenuItem>
            <MenuItem value={"Kiralik"}>Kiralık</MenuItem>
            <MenuItem value={"DevrenSatilik"}>Devren Satılık</MenuItem>
            <MenuItem value={"DevrenKiralik"}>Devren Kiralik</MenuItem>
          </Select>
        );
      case "Arsa":
      case "Bina":
        return (
          <Select
            labelId="satilikSelectLabel"
            id="satilik"
            value={satilik}
            onChange={handleSatilikTipi}
          >
            <MenuItem value={"Satilik"}>Satılık</MenuItem>
            <MenuItem value={"Kiralik"}>Kiralık</MenuItem>
          </Select>
        );
      case "TuristikTesis":
        return (
          <Select
            labelId="satilikSelectLabel"
            id="satilik"
            value={satilik}
            onChange={handleSatilikTipi}
          >
            <MenuItem value={"Satilik"}>Satılık</MenuItem>
            <MenuItem value={"Kiralik"}>Kiralık</MenuItem>
          </Select>
        );
      case "DevreMulk":
        return (
          <Select
            labelId="satilikSelectLabel"
            id="satilik"
            value={satilik}
            onChange={handleSatilikTipi}
          >
            <MenuItem value={"AkdenizBolgesi"}>Akdeniz Bölgesi</MenuItem>
            <MenuItem value={"DoguAnadoluBolgesi"}>
              Doğu Anadolu Bölgesi
            </MenuItem>
            <MenuItem value={"EgeBolgesi"}>Ege Bölgesi</MenuItem>
            <MenuItem value={"GuneydoguBolgesi"}>
              Güneydoğu Anadolu Bölgesi
            </MenuItem>
            <MenuItem value={"IcAnadoluBolgesi"}>İç Anadolu Bölgesi</MenuItem>
            <MenuItem value={"KaredenizBolgesi"}>Karadeniz Bölgesi</MenuItem>
            <MenuItem value={"Marmara Bolgesi"}>Marmara Bölgesi</MenuItem>
            <MenuItem value={"Kibris"}>Kibris</MenuItem>
            <MenuItem value={"Yurtdisi"} Yurtdişi></MenuItem>
          </Select>
        );

      default:
        return "";
    }
  };
  const handleFeatureType = () => {
    if (emlakTipi === "Konut") {
      switch (satilik) {
        case "Satilik":
          return (
            <Select
              labelId="daireSelectTipiLabel"
              id="daireTipi"
              value={daire}
              onChange={handleDaireTipi}
            >
              <MenuItem value={"Daire"}>Daire</MenuItem>
              <MenuItem value={"Residance"}>Residance</MenuItem>
              <MenuItem value={"MustakilEv"}>Mustakil Ev</MenuItem>
              <MenuItem value={"Villa"}>Villa</MenuItem>
              <MenuItem value={"CiftlikEvi"}>Çiftlik Evi</MenuItem>
              <MenuItem value={"KoskKonak"}>Köşk veya Konak</MenuItem>
              <MenuItem value={"Yali"}>Yalı</MenuItem>
              <MenuItem value={"YaliDairesi"}>Yalı Dairesi</MenuItem>
              <MenuItem value={"Yazlik"}>Yazlik</MenuItem>
              <MenuItem value={"PrefabrikEv"}>Prefabrik Ev</MenuItem>
              <MenuItem value={"Kooperatif"}>Kooperatif</MenuItem>
            </Select>
          );
        case "Kiralik":
          return (
            <Select
              labelId="daireSelectTipiLabel"
              id="daireTipi"
              value={daire}
              onChange={handleDaireTipi}
            >
              <MenuItem value={"Daire"}>Daire</MenuItem>
              <MenuItem value={"Residance"}>Residance</MenuItem>
              <MenuItem value={"MustakilEv"}>Mustakil Ev</MenuItem>
              <MenuItem value={"Villa"}>Villa</MenuItem>
              <MenuItem value={"CiftlikEvi"}>Çiftlik Evi</MenuItem>
              <MenuItem value={"KoskKonak"}>Köşk veya Konak</MenuItem>
              <MenuItem value={"Yali"}>Yalı</MenuItem>
              <MenuItem value={"YaliDairesi"}>Yalı Dairesi</MenuItem>
              <MenuItem value={"Yazlik"}>Yazlık</MenuItem>
            </Select>
          );
        case "DevrenSatilikKonut":
          return (
            <Select
              labelId="daireSelectTipiLabel"
              id="daireTipi"
              value={daire}
              onChange={handleDaireTipi}
            >
              <MenuItem value={"Daire"}>Daire</MenuItem>
              <MenuItem value={"Villa"}>Villa</MenuItem>
            </Select>
          );

        default:
          return "";
      }
    } else if (emlakTipi === "Isyeri") {
      switch (satilik) {
        case "Satilik":
        case "Kiralik":
          return (
            <Select
              labelId="daireSelectTipiLabel"
              id="daireTipi"
              value={daire}
              onChange={handleDaireTipi}
            >
              <MenuItem value={"AkaryakitIstasyonu"}>
                Akaryakit İstasyonu
              </MenuItem>
              <MenuItem value={"ApartmanDairesi"}>Apartman Dairesi</MenuItem>
              <MenuItem value={"Atolye"}>Atölye</MenuItem>
              <MenuItem value={"Bufe"}>Büfe</MenuItem>
              <MenuItem value={"BufeOfis"}>Bufe & Ofis</MenuItem>
              <MenuItem value={"CafeBar"}>Cafe Bar</MenuItem>
              <MenuItem value={"Ciftlik"}>Çiftlik</MenuItem>
              <MenuItem value={"DepoAntrepo"}>Depo & Antrepo</MenuItem>
              <MenuItem value={"DugunSalonu"}>Düğün Salonu</MenuItem>
              <MenuItem value={"DukkanMagza"}>Dükkan & Mağza</MenuItem>
              <MenuItem value={"EnerjiSantralleri"}>
                Enerji Santralleri
              </MenuItem>
              <MenuItem value={"Fabrika"}>Fabrika</MenuItem>
              <MenuItem value={"GarajPark Yeri"}>Garaj & Park Yeri</MenuItem>
              <MenuItem value={"Imalathane"}>Imalathane</MenuItem>
              <MenuItem value={"işHanıKatıOfisi"}>
                İş Hanı Katı & Ofisi
              </MenuItem>
              <MenuItem value={"Kantin"}>Kantin</MenuItem>
              <MenuItem value={"kirKahvaltiBahcesi"}>
                Kır & Kahvaltı Bahçesi
              </MenuItem>
              <MenuItem value={"Kıraathane"}>Kıraathane</MenuItem>
              <MenuItem value={"Komple Bina"}>Komple Bina</MenuItem>
              <MenuItem value={"MadenOcagı"}>Maden Ocağı</MenuItem>
              <MenuItem value={"PazarYeri"}>Pazar Yeri</MenuItem>
              <MenuItem value={"PlazaKatı"}>Plaza Katı</MenuItem>
              <MenuItem value={"PrefabrikYapı"}>Prefabrik Yapı</MenuItem>
              <MenuItem value={"RadyoIstasyonu"}>Radyo Istasyonu</MenuItem>
              <MenuItem value={"ResidanceKatiOfisi"}>
                Residance Katı & Ofisi
              </MenuItem>
              <MenuItem value={"RestoranLokanta"}>Restoran & Lokanta</MenuItem>
              <MenuItem value={"SagılıkMerkezi"}>Sağılık Merkezi</MenuItem>
              <MenuItem value={"SinemaVeyaKonferansSalonu"}>
                Sinema & Konferans Salonu
              </MenuItem>
              <MenuItem value={"PrefabrikYapı"}>SPA, Hamam & Sauna</MenuItem>
              <MenuItem value={"Spor Tesisi"}>Spor Tesisi</MenuItem>
              <MenuItem value={"Yurt"}>Yurt</MenuItem>
            </Select>
          );
        case "DevrenSatilik":
        case "DevrenKiralik":
          return (
            <Select
              labelId="daireSelectTipiLabel"
              id="daireTipi"
              value={daire}
              onChange={handleDaireTipi}
            >
              <MenuItem value={"Acente"}>Acente</MenuItem>
              <MenuItem value={"AkaryakitIstasyonu"}>
                Akaryakit İstasyonu
              </MenuItem>
              <MenuItem value={"AktarVeyaBaharatcı"}>
                Aktar & Baharatçı
              </MenuItem>
              <MenuItem value={"AnaokuluVeyaKreş"}>Anaokulu & Kreş</MenuItem>
              <MenuItem value={"ApartmanDairesi"}>Apartman Dairesi</MenuItem>
              <MenuItem value={"AracShowroomServis"}>
                Araç Şhowroom & Servis
              </MenuItem>
              <MenuItem value={"Atolye"}>Atölye</MenuItem>
              <MenuItem value={"AVMStandi"}>AVM Standı</MenuItem>
              <MenuItem value={"Balikçi"}>Balıkçi</MenuItem>
              <MenuItem value={"Bar"}>Bar</MenuItem>
              <MenuItem value={"Bijuteri"}>Bijuteri</MenuItem>
              <MenuItem value={"Borekci"}>Börekçi</MenuItem>
              <MenuItem value={"Bufe"}>Büfe</MenuItem>
              <MenuItem value={"BuroOfis"}>Büro & Ofis</MenuItem>
              <MenuItem value={"Cafe"}>Cafe</MenuItem>
              <MenuItem value={"CDDVDDukkani"}>CD & DVD Dükkanı</MenuItem>
              <MenuItem value={"CepTelefonuDukkani"}>
                Cep Telefonu Dükkanı
              </MenuItem>
              <MenuItem value={"Camasırhane"}>Çamaşırhane</MenuItem>
              <MenuItem value={"CayOcagi"}>Çay Ocağı</MenuItem>
              <MenuItem value={"CicekciFidanlik"}>Çiçekçi & Fidanlık</MenuItem>
              <MenuItem value={"Ciftlik"}>Çiftlik</MenuItem>
              <MenuItem value={"DepoAntrepo"}>Depo & Antrepo</MenuItem>
              <MenuItem value={"DugunSalonu"}>Düğün Salonu</MenuItem>
              <MenuItem value={"DukkanMagaza"}>Dükkan & Mağaza</MenuItem>
              <MenuItem value={"EczaneMedikal"}>Eczane & Medikal</MenuItem>
              <MenuItem value={"ElektirikciHırdavatcı"}>
                Elektirikçi & Hırdavatçı
              </MenuItem>
              <MenuItem value={"Elektronik"}>Elektronik</MenuItem>
              <MenuItem value={"FabrikaUretimTesisi"}>
                Fabrika & Üretim Tesisi
              </MenuItem>
              <MenuItem value={"FaturaMerkezi"}>Fatura Merkezi</MenuItem>
              <MenuItem value={"FotografStudyosu"}>Fotoğraf Stüdyosu</MenuItem>
              <MenuItem value={"Giyim Mağazası"}>Giyim Mağazası</MenuItem>
              <MenuItem value={"Gozlukcu"}>Gözlükçü</MenuItem>
              <MenuItem value={"HaliYikama"}>Halı Yıkama</MenuItem>
              <MenuItem value={"HuzurEvi"}>Huzur Evi</MenuItem>
              <MenuItem value={"InternetOyunCafe"}>
                İnternet & Oyun Cafe
              </MenuItem>
              <MenuItem value={"IsHani"}>İş Hanı</MenuItem>
              <MenuItem value={"IsHaniKatiOfisi"}>
                İş Hanı Katı & Ofisi
              </MenuItem>
              <MenuItem value={"Kantin"}>Kantin</MenuItem>
              <MenuItem value={"Kasap"}>Kasap</MenuItem>
              <MenuItem value={"KırKahvaltiBahcesi"}>
                Kır & Kahvaltı Bahçesi
              </MenuItem>
              <MenuItem value={"Kıraathane"}>Kıraathane</MenuItem>
              <MenuItem value={"KozmatikMagazası"}>Kozmatik Mağazası</MenuItem>
              <MenuItem value={"KuaforGüzellikMerkezi"}>
                Kuaför & Güzellik Merkezi
              </MenuItem>
              <MenuItem value={"KursEgitimMerkezi"}>
                Kurs & Eğitim Merkezi
              </MenuItem>
              <MenuItem value={"KuruTemizleme"}>Kuru Temizleme</MenuItem>
              <MenuItem value={"Kuruyemisci"}>Kuruyemişçi</MenuItem>
              <MenuItem value={"Kuyumcu"}>Kuyumcu</MenuItem>
              <MenuItem value={"Lunapark"}>Lunapark</MenuItem>
              <MenuItem value={"Maden Ocagı"}>Maden Ocağı</MenuItem>
              <MenuItem value={"Manav"}>Manav</MenuItem>
              <MenuItem value={"Market"}>Market</MenuItem>
              <MenuItem value={"Matbaa"}>Matbaa</MenuItem>
              <MenuItem value={"Modaevi"}>Modaevi</MenuItem>
              <MenuItem value={"Muayenehane"}>Muayenehane</MenuItem>
              <MenuItem value={"NakliyatKarga"}>Nakliyat & Karga</MenuItem>
              <MenuItem value={"Nalbur"}>Nalbur</MenuItem>
              <MenuItem value={"Okul"}>Okul</MenuItem>
              <MenuItem value={"OtaparkVeyaGaraj"}>Otapark / Garaj</MenuItem>
              <MenuItem value={"OtoServisBakim"}>Oto Servis & Bakım</MenuItem>
              <MenuItem value={"OtoYedekParca"}>Oto Yedek Parça</MenuItem>
              <MenuItem value={"OtaYikamaKuafor"}>Ota Yıkama & Kuaför</MenuItem>
              <MenuItem value={"OgrenciYurdu"}>Ögrenci Yurdu</MenuItem>
              <MenuItem value={"PastaneFirinTatlici"}>
                Pastane & Fırın & Tatlıcı
              </MenuItem>
              <MenuItem value={"PazarYeri"}>Pazar Yeri</MenuItem>
              <MenuItem value={"PetShop"}>Pet Shop</MenuItem>
              <MenuItem value={"Plaza"}>Plaza</MenuItem>
              <MenuItem value={"PlazaKatiVeyaOfisi"}>
                Plaza Katı & Ofisi
              </MenuItem>
              <MenuItem value={"ProvaKayitStudyosu"}>
                ProvaKayıtStudyosu
              </MenuItem>
              <MenuItem value={"RadyoistasyonuKanali"}>
                Radyo istasyonu & TV Kanalı
              </MenuItem>
              <MenuItem value={"ResidanceKatiOfisi"}>
                Residance Katı & Ofisi
              </MenuItem>
              <MenuItem value={"RestoranLokanta"}>Restoran & Lokanta</MenuItem>
              <MenuItem value={"SaatMagazasi"}>Saat Magazası</MenuItem>
              <MenuItem value={"SebzeMeyveHali"}>Sebze & Meyve Hali</MenuItem>
              <MenuItem value={"SinemaKonferansSalonu"}>
                Sinema & Konferans Salonu
              </MenuItem>
              <MenuItem value={"SogukHavaDeposu"}>Soğuk Hava Deposu</MenuItem>
              <MenuItem value={"SPAHamamSauna"}>SPA, Hamam & Sauna</MenuItem>
              <MenuItem value={"SporTesisi"}>Spor Tesisi</MenuItem>
              <MenuItem value={"SuTupBayi"}>Su & Tup Bayi</MenuItem>
              <MenuItem value={"SansOyunlarıBayisi"}>
                Sans Oyunları Bayisi
              </MenuItem>
              <MenuItem value={"Sarkuteri"}>Sarküteri</MenuItem>
              <MenuItem value={"TaksiDuragı"}>Taksi Durağı</MenuItem>
              <MenuItem value={"Tamirhane"}>Tamirhane</MenuItem>
              <MenuItem value={"Tekel Bayi"}>Tekel Bayi</MenuItem>
              <MenuItem value={"TeknikServis"}>Teknik Servis</MenuItem>
              <MenuItem value={"Terzi"}>Terzi</MenuItem>
              <MenuItem value={"Tuhafiye"}>Tuhafiye</MenuItem>
              <MenuItem value={"Veteriner"}>Veteriner</MenuItem>
              <MenuItem value={"Zuccaciye"}>Zuccaciye</MenuItem>
            </Select>
          );

        default:
          return "";
      }
    }
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="emlakTipiLabel">Emlak</InputLabel>
        <Select
          labelId="emlakTipiSelectLabel"
          id="emlakTipi"
          value={emlakTipi}
          onChange={handleEmlakTipi}
        >
          <MenuItem value={"Konut"}>Konut</MenuItem>
          <MenuItem value={"Isyeri"}>İş Yeri</MenuItem>
          <MenuItem value={"Arsa"}>Arsa</MenuItem>
          <MenuItem value={"Bina"}>Bina</MenuItem>
          <MenuItem value={"DevreMulk"}>Devre Mülk</MenuItem>
          <MenuItem value={"TuristikTesis"}>Turistik Tesis</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="satilikLabel">Satılık</InputLabel>
        {emlakTipi ? handlePropertyType() : ""}
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="MulkTipiLabel">Mülk</InputLabel>
        {satilik ? handleFeatureType() : ""}
      </FormControl>
    </div>
  );
}
