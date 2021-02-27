import React, { useState, useRef } from "react";
import "../../styles/dash.css";
export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [detect, setDetect] = useState(true);
  const [shop, setShop] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <div className="main-dash">
      <div style={{ marginLeft: open ? "0px" : "-200px" }} className="sidebar">
        <div>
          PlantMedic{shop}
          {search}
        </div>
        <ul>
          <li
            onClick={() => {
              setDetect(true);
              setSearch(false);
              setShop(false);
            }}
          >
            Detect Disease
          </li>
          <li
            onClick={() => {
              setDetect(false);
              setSearch(false);
              setShop(true);
            }}
          >
            Explore Shops
          </li>
          <li
            onClick={() => {
              setDetect(false);
              setSearch(true);
              setShop(false);
            }}
          >
            Search
          </li>
          <li>Logout</li>
        </ul>
      </div>
      <div>
        <div style={{ marginTop: "10px", cursor: "pointer" }}>
          <img
            src="https://img.icons8.com/carbon-copy/100/000000/menu.png"
            alt="menu"
            width="50px"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="main-dash-inner">{detect ? <Detect /> : null}</div>
      </div>
    </div>
  );
}

const Detect = () => {
  const input = useRef(null);
  const [photo, setPhoto] = useState(null);
  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };
  return (
    <div className="detect-main">
      <img src={photo ? photo : null} alt="plant" />
      <div className="detect-upload" onClick={() => input.current.click()}>
        <div>
          <img
            src="https://img.icons8.com/officel/80/000000/upload.png"
            alt="upload"
            width="50px"
          />
        </div>
        <input type="file" hidden ref={input} onChange={handleUpload} />
        <div className="upload-text">Upload Image</div>
      </div>
    </div>
  );
};
