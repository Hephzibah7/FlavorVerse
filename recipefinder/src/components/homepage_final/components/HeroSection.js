import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";

import CustomImage from './CustomImage';

export default function HeroSection() {

  const images = [
    "img/gallery/img_1.jpg",
    "img/gallery/img_2.jpg",
    "img/gallery/img_3.jpg",
    "img/gallery/img_4.jpg",
    "img/gallery/img_5.jpg",
    "img/gallery/img_6.jpg",
    "img/gallery/img_7.jpg",
    "img/gallery/img_8.jpg",
    "img/gallery/img_9.jpg"
  ]

  return (
    <div className="section hero">
      <div className="col typography">
        <h1 className="title">
          Discover Delicious Recipes
        </h1>
        <p className="title-des">
        FlavorVerse is your gateway to a world of culinary delight. Our food recipe finder website is your go-to destination for exploring a vast and diverse collection of mouthwatering recipes. Whether you're a seasoned chef or a novice cook, we've got something to tantalize your taste buds. Recipes are the key to a healthy lifestyle and we have created this app for you! We provide recipes based on your interests, dietary, health, seasons, places and a lot more.
        </p>
        <button className='btn'>Explore Now !</button>
      </div>
      <div className="col gallery">
        { images.map((src, index) => (
          <CustomImage key={index} imgSrc={src} pt={"90%"} /> 
        )) }
        
        
      </div>
    </div>

  )
}
