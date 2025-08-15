import React from "react";
import { assets } from "../assets/assets";

function Hero() {
  // Get a random hero image from hero_img1, hero_img2, hero_img3
  const heroImages = [
    assets.hero_img,
    assets.hero_img2,
    assets.hero_img3,
    assets.hero_img4,
    assets.hero_img5,
  ];
  const randomIndex = Math.floor(Math.random() * heroImages.length);
  const randomHeroImg = heroImages[randomIndex];

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className=" flex items-center gap-2">
            <p className="w-10 md:w-14 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="pacifico-regular text-5xl sm:py-3 lg:text-5x1 leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className=" font-semibold text-sm  md:text-base">SHOPING</p>
            <p className="w-10 md:w-14 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/* Hero Right Side */}
      <img className="w-full sm:w-1/2" src={randomHeroImg} alt="" />
    </div>
  );
}

export default Hero;
