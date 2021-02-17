/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { storage } from "../firebase";
import Button from "@material-ui/core/Button";

const FirebaseFileUpload = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    if (image !== null) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);
            });
        }
      );
    } else {
      alert("lütfen dosya seçmeden yükle demeyiniz !");
    }
  };

  return (
    <div>
      <progress value={progress} max="100" />
      <br />
      <br />
      {image ? <h5>Dosya Yüklenmiştir</h5> : ""}
      <input type="file" onChange={handleChange} />

      <Button
        disabled={image ? false : true}
        variant="contained"
        color="default"
        startIcon={<CloudUploadIcon />}
        onClick={handleUpload}
      >
        Yükle
      </Button>
      <br />
      <img
        src={url || "http://via.placeholder.com/300"}
        alt="farkli bir dosya yükleyiniz"
      />
    </div>
  );
};

export default FirebaseFileUpload;
