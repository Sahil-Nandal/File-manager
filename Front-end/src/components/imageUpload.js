import React, { useEffect, useState } from "react";
import "./imageUpload.css"

function ImageUpload() {
  const [image, setImage] = useState("");
  const [allImage, setAllImage] = useState([]);

  const backButtonhandler = () => {
    window.location.href = "./userDetails";
  }

  function covertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result); //base64encoded string
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  }
  useEffect(() => {
    getImage();
  }, []);

  function uploadImage() {
    fetch("http://localhost:5000/upload-image", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        base64: image,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    alert("Uploaded Successfully");
  }
  function getImage() {
    fetch("http://localhost:5000/get-image", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllImage(data.data);
      });
  }
  return (
    <div className="auth-wrapper outerDiv">
      <div className="auth-inner displaySec" >
        <h1>Upload Image Section </h1>
        <br />
        <input accept="image/*" type="file" onChange={covertToBase64} />
        {image == "" || image == null ? (
          ""
        ) : (
          <img width={100} height={100} src={image} />
        )}
        <button onClick={uploadImage} className="btn btn-primary">Upload</button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h3>Uploaded images:</h3>
        {allImage.map((data) => {
          return <img className="uploadedImgs" width={150} height={150} src={data.image} />;
        })}
        <br />
        <button onClick={backButtonhandler} className="btn btn-primary">Go back</button>
      </div>

      

    </div>
  );
}

export default ImageUpload;
