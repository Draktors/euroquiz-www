"use client";

import React, { FC, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Paginator } from "./Paginator";

interface AppSectionProps {
  name: string;
  logo: string;
  description: string;
  iosLink: string;
  androidLink: string;
  reversed?: boolean;
}

export const AppSection: FC<AppSectionProps> = ({
  name,
  logo,
  description,
  iosLink,
  androidLink,
  reversed,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    beforeChange: (_unused: any, newIndex: number) => setCurrentSlide(newIndex),
  };

  return (
    <section className="mb-12 lg:mb-40 lg:grid lg:grid-cols-2 lg:gap-32">
      <div className={`flex-1 ${reversed ? "lg:order-2" : "order-1"}`}>
        <div
          className={`mb-3 flex ${
            reversed ? "justify-end" : "justify-start"
          } lg:justify-start`}
        >
          <div className="flex flex-col">
            <img
              src={`/images/${logo}-logo.png`}
              alt="Logo de l'application bae : jeu de couple"
              className={`w-9 lg:w-20 mb-3 lg:mb-7 ${
                reversed ? "self-end" : "self-start"
              } lg:self-start`}
            />
            <h2
              className={`text-lg lg:text-4xl font-body font-bold mb-6 uppercase ${
                reversed ? "underline-custom-right" : "underline-custom-left"
              }`}
            >
              {name}
            </h2>
          </div>
        </div>
        <p className="text-sm/normal lg:text-base/normal mb-3 lg:mb-7 font-body font-normal text-justify">
          {description}
        </p>
        <div className="flex gap-3 mb-12">
          <a href={iosLink}>
            <img src="/images/apple-store-logo.svg" />
          </a>
          <a href={androidLink}>
            <img src="/images/google-play-logo.svg" />
          </a>
        </div>
      </div>
      <div className={`flex-1 ${reversed ? "lg:order-1" : "order-2"}`}>
        <Slider {...settings}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <img
                src={`/images/${logo}/image_${i}.png`}
                className="w-full lg:w-60"
              />
            </div>
          ))}
        </Slider>
        <Paginator currentSlide={currentSlide} totalSlides={4} />
      </div>
    </section>
  );
};
