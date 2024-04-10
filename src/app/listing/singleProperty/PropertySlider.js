"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertySlider = () => {
  var settings = {
    className: "singlePropertySlider",
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        
          <Image
            width={300}
            height={280}
            src="/propertyImages/gs1.png"
            className="item"
            alt="property"
          />
        
          <Image
            width={300}
            height={280}
            src="/propertyImages/gs2.png"
            className="item"
            alt="property"
          />
        
          <Image
            width={300}
            height={280}
            src="/propertyImages/gs3.png"
            className="item"
            alt="property"
          />
        
          <Image
            width={300}
            height={280}
            src="/propertyImages/gs4.png"
            className="item"
            alt="property"
          />
        
          <Image
            width={300}
            height={280}
            src="/propertyImages/gs1.png"
            className="item"
            alt="property"
          />
        
          <Image
            width={300}
            height={280}
            src="/propertyImages/gs2.png"
            className="item"
            alt="property"
          />
        
          <Image
            width={300}
            height={280}
            src="/propertyImages/gs3.png"
            className="item"
            alt="property"
          />
        
          <Image
            width={300}
            height={280}
            src="/propertyImages/gs4.png"
            className="item"
            alt="property"
          />
      </Slider>
    </>
  );
};

export default PropertySlider;
