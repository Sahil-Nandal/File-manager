import React, { Component, useEffect, useState } from "react";
import "./userHome.css"
import ImageUpload from "./imageUpload";

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };

  const uploadImagehandler = () => {
    window.location.href = "./uploadImage";
  }
  const uploadPdfhandler = () => {
    window.location.href = "./uploadPdf";
  }
  return (
    <div className="auth-wrapper userHomepg">
      <div className="auth-inner displayDetails">
        <div>
          Name<h1>{userData.fname}</h1>
          Email <h1>{userData.email}</h1>
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>

          <hr />
          <br />
          <button onClick={uploadImagehandler} className="btn btn-primary">Upload Image</button>
         
          <button onClick={uploadPdfhandler} className="btn btn-primary">Upload Pdf</button>
          <br />

          
        </div>
      </div>
    </div>
  );
}
