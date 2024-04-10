"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fragment, useEffect, useState } from "react";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container-fluid testimonial_bg">
        <div className="container testimonial_wrapper">
          <div className="row testimonial_heading">
            <div className="col-12 text-center">
              <h3 className="mt-5 text-white text-center">Testimonial</h3>
              <h2 className="text-white mb-4">What Our Client&apos;s Say</h2>
            </div>
          </div>

          {/* <!-- slides of testimonials --> */}
          <div className="owl-carousel owl-theme">
            {/* <!-- single testimonial --> */}

            <Slider {...settings}>
              {testimonials?.map((testimonial, i) => (
                <Fragment key={testimonial.id}>
                  <div className="item">
                    <div
                      className={`row text-white st st_left`}
                    >
                      <div
                        className={`col-8 col-12 order-last ${
                          i % 2 === 0 ? "order-md-first" : "order-md-last"
                        }`}
                      >
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.feedback}</p>
                      </div>
                      <div
                        className={`col-4 col-12 text-right order-first ${
                          i % 2 === 0 ? "order-md-last" : "order-md-first"
                        }`}
                      >
                        <Image
                          width={123}
                          height={123}
                          src={`/testimonialImages/${testimonial.image}`}
                          alt="saini"
                        />
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
              {/* <div className="row text-white st st_left">
                  <div className="col-8 col-12 order-last order-md-first">
                    <h4>Mitchel Saini</h4>
                    <p>
                      Lorem ipsum dolor sit amet, elit. In nec nulla arcu.
                      Phasellus quis
                    </p>
                  </div>
                  <div className="col-4 col-12 text-right order-first order-md-last">
                    <Image
                      width={123}
                      height={123}
                      src="images/home/saini.png"
                      alt="saini"
                    />
                  </div>
                </div> */}
            </Slider>
            {/* <div className="row text-white st st_left">
                <div className="col-8 col-12 order-last order-md-first">
                  <h4>Mitchel Saini</h4>
                  <p>
                    Lorem ipsum dolor sit amet, elit. In nec nulla arcu.
                    Phasellus quis
                  </p>
                </div>
                <div className="col-4 col-12 text-right order-first order-md-last">
                  <Image
                    width={123}
                    height={123}
                    src="images/home/saini.png"
                    alt="saini"
                  />
                </div>
              </div>
              <div className="row text-white st st_right">
                <div className="col-8 order-last">
                  <h4>Mitchel Saini</h4>
                  <p>
                    Lorem ipsum dolor sit amet, elit. In nec nulla arcu.
                    Phasellus quis
                  </p>
                </div>
                <div className="col-4 text-left order-first">
                  <Image
                    width={123}
                    height={123}
                    src="images/home/saini2.png"
                    alt="saini"
                  />
                </div>
              </div> */}
          </div>
          {/* <!-- end of single testimonial --> */}
          <div className="item">
            {/* <div className="row text-white st st_left">
                <div className="col-8 col-12 order-last order-md-first">
                  <h4>Mitchel Saini</h4>
                  <p>
                    Lorem ipsum dolor sit amet, elit. In nec nulla arcu.
                    Phasellus quis
                  </p>
                </div>
                <div className="col-4 col-12 text-right order-first order-md-last">
                  <Image
                    width={123}
                    height={123}
                    src="images/home/saini.png"
                    alt="saini"
                  />
                </div>
              </div>
              <div className="row text-white st st_right">
                <div className="col-8 order-last">
                  <h4>Mitchel Saini</h4>
                  <p>
                    Lorem ipsum dolor sit amet, elit. In nec nulla arcu.
                    Phasellus quis
                  </p>
                </div>
                <div className="col-4 text-left order-first">
                  <Image
                    width={123}
                    height={123}
                    src="images/home/saini2.png"
                    alt="saini"
                  />
                </div>
              </div> */}
          </div>
        </div>
        {/* <!--end of slides of testimonials --> */}
      </div>
    </>
  );
};

export default Testimonial;
