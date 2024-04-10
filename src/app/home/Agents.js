'use client'
import Slider from "react-slick";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  
  useEffect(() => {
    fetch('/agents.json')
    .then((res) => res.json())
    .then((data) => setAgents(data))
  }, [])

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container agents_wrapper">
        <div className="row agents_heading">
          <div className="col-12 text-center">
            <h3 className="mt-5 text-light text-center">Agents</h3>
            <h2 className="text-dark mb-4">Meet Our Agents</h2>
          </div>
        </div>

          <Slider {...settings}>
            {agents.map((agent) => (
              <Fragment key={agent.id}>
                <div className="item">
                  <div className="card text-center">
                    <Image
                      width={258}
                      height={267}
                      className="card-img-top"
                      src={`/agentsImages/${agent.image}`}
                      alt="aljari joseph"
                    />
                    <div className="card-body">
                      <h4 className="card-title">{agent.name}</h4>
                      <p className="card-text text-light">{agent.position}</p>
                      <div className="social_icon">
                        <ul>
                          <li>
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                          </li>
                          <li>
                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </Slider>
      </div>
    </>
  );
};

export default Agents;
