import React from 'react'
import "devextreme/dist/css/dx.light.css";
import { Gallery } from "devextreme-react/gallery";

const img1 = require("../../assets/img/banner/banner1.webp");
const img2 = require("../../assets/img/banner/banner2.webp");
const img3 = require("../../assets/img/banner/banner3.webp");
const img4 = require("../../assets/img/banner/banner4.webp");
const img5 = require("../../assets/img/banner/banner5.webp");
const img6 = require("../../assets/img/banner/banner6.webp");
const dataSource = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6
];
const Slider = () => {
  return (
    <>
      <Gallery
        dataSource={dataSource}
        height={300}
        slideshowDelay={1500}
        loop={true}
        swipeEnabled={true}
        showNavButtons={true}
      />
    </>
  );
}

export default Slider