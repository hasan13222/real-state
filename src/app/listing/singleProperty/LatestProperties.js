"use client"
import { Fragment } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestProperties = ({ items }) => {
  var settings = {
    className: "latestPropertySlider",
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="row shadow latest_pro rounded">
        <div className="col-12">
          <h4 className="text-dark">Latest Properties</h4>
        </div>
        <div className="latest col-12">
          <Slider {...settings}>
            {items.map((item, i) => (
              <Fragment key={i + "lp"}>
                <div className="item">
                  <div className="card">
                    <div className="card-header">
                      <Image
                        width={320}
                        height={180}
                        className="card-img-top"
                        src={`/homeImages/${item.image}`}
                        alt="Card image"
                      />
                      <span className="sale badge">For Sale</span>
                      <Image
                        width={56}
                        height={56}
                        src="/homeImages/owner1.png"
                        alt="owner photo"
                        className="owner_photo"
                      />
                      <span className="feature">New</span>
                    </div>
                    <div className="card-body">
                      <h4 className="card-title text-dark">{item.name}</h4>
                      <p className="card-text text-light">{item.location}</p>
                    </div>
                    <div className="card-footer">
                      <div className="row">
                        <div className="col-3">
                          <div className="bed_wrap">
                            <Image
                              width={18}
                              height={18}
                              src="/homeImages/bed.png"
                              alt="bed"
                              className="bed"
                            />
                          </div>
                          <p>{item.baths} Beds</p>
                        </div>
                        <div className="col-3">
                          <div className="bt_wrap">
                            <Image
                              width={18}
                              height={18}
                              src="/homeImages/bath-tub.png"
                              alt="bath tub"
                              className="bath_tub"
                            />
                          </div>
                          <p>{item.baths} Baths</p>
                        </div>
                        <div className="col-6 text-right">
                          <p className="text-dark">${item.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default LatestProperties;
