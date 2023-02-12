import React from "react";
import "./Proceed.css";
import SignatureCanvas from "react-signature-canvas";
import html2canvas from "html2canvas";
import axios from "axios";
import { Buffer } from "buffer";
const Proceed = () => {
  const loginfun = () => {
    let data1, data2;
    html2canvas(document.getElementById("drawpad1")).then(function (canvas) {
      // document.getElementById("output").appendChild(canvas);
      data1 = canvas.toDataURL("image/png");
    });
    html2canvas(document.getElementById("drawpad1")).then(function (canvas) {
      // document.getElementById("output").appendChild(canvas);
      data2 = canvas.toDataURL("image/png");
    });

    const buffer1 = Buffer.from(data1, "base64");
    const buffer2 = Buffer.from(data2, "base64");
    axios
      .post("http://localhost/5000/api/login", {
        // userID: userID,
        // password: buffer,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="row">
      <div
        className="col-6"
        style={{ backgroundColor: " #D7E0EA", height: "100vh" }}
      >
        <h4 className="ps-5 pt-3 fs-2">
          MANIT <span style={{ color: "#FD6F00" }}>Bank</span>
        </h4>
        <img
          className="text-center mt-5"
          src="register.png"
          alt="Register page image"
        />
      </div>
      <div className="col-6 mt-4" style={{ borderRadius: "50rem" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 pos ">
              <li className="nav-item dropdown m-4">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Hindi
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Spanish
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Chinese
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <div className="" style={{ marginTop: "1rem", marginLeft: "4rem" }}>
          <h2>
            <b> Create Account</b>
          </h2>
          <div>
            <div id="watermark">Draw Here </div>
            <div
              className="patt"
              id="drawpad1"
              style={{ height: 300, marginTop: 10, marginLeft: 110 }}
            >
              <SignatureCanvas
                penColor="green"
                canvasProps={{
                  width: 400,
                  height: 300,
                  className: "sigCanvas",
                }}
              />
            </div>
          </div>
          <br />
          <div>
            <div id="watermark">Draw Here </div>
            <div
              className="patt"
              id="drawpad2"
              style={{ height: 300, marginTop: 10, marginLeft: 110 }}
            >
              <SignatureCanvas
                penColor="green"
                canvasProps={{
                  width: 400,
                  height: 300,
                  className: "sigCanvas",
                }}
              />
            </div>
          </div>
          <button
            className="btn rounded-3 mt-4  text-center"
            style={{
              backgroundColor: "#769BC1",
              width: "35%",
              color: "white",
              marginLeft: "7rem",
            }}
          >
            Proceed
          </button>
          <h5
            className="mt-3"
            style={{ fontSize: "0.9rem", marginLeft: "7rem" }}
          >
            Already have an account? <a href="">Login Now</a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Proceed;
