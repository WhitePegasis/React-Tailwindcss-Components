// npm install primereact
//https://primereact.org/carousel/

import React, { useState } from "react";
import { Carousel } from "primereact/carousel";
import SampleVideo from '../Assets/sample.mp4'

export default function VideoCarousel() {
  const [products] = useState([
    {
      id: 1,
      name: "Product 1",
     video: SampleVideo
    },
    {
      id: 2,
      name: "Product 2",
      video: SampleVideo
    },
    {
        id: 3,
        name: "Product 3",
        video: SampleVideo
      },
      {
        id: 4,
        name: "Product 4",
        video: SampleVideo
      },
    // Add more products as needed
  ]);
  const responsiveOptions = [
    {
      breakpoint: "1800px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];


  const productTemplate = (product) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div>
          <h4 className="mb-1">{product.name}</h4>
          <video
            class="w-full"
            src={SampleVideo}
            autoplay
            loop
            muted
            controls
          ></video> 
          
        </div>
      </div>
    );
  };

  return (
    <div className="card" style={{width:"500px", height:"500px"}}>
      <Carousel
        value={products}
        // numVisible={1}
        // numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
        // nextIcon={nextButtonImage}
      />
    </div>
  );
}
