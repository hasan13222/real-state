import Image from "next/image";
import homeService from "@/images/home/home.png";
import partnership from "@/images/home/partnership.png";
import finances from "@/images/home/finances.png";
import helpingHand from "@/images/home/helping-hand.png";

const Service = () => {
  return (
    <>
      <div className="container-fluid real_state_bg">
        <div className="container real_state_wrapper">
          <div className="row rs_heading text-center">
            <div className="col-12">
              <h3 className="text-light pt-5">Why Choose Us</h3>
              <h2 className="text-white mb-4">
                We offer perfect real estate services
              </h2>
            </div>
          </div>
          {/* <!-- real state service parts --> */}
          <div className="row rs_inner text-center rounded shadow">
            {/* <!-- single service --> */}
            <div className="col-12 col-md-6 col-lg-3">
              <Image width={46} height={44} src={homeService} alt="home" />
              <h3 className="text-dark">Find Your Home</h3>
              <p className="text-light">
                Lorem ipsum dolor sit amet, elit. In nec nulla arcu. Phasellus
                quis
              </p>
            </div>
            {/* <!-- end of first single service --> */}
            <div className="col-12 col-md-6 col-lg-3">
              <Image
                width={46}
                height={44}
                src={partnership}
                alt="partnership"
              />
              <h3 className="text-dark">Trusted by thousands</h3>
              <p className="text-light">
                Lorem ipsum dolor sit amet, elit. In nec nulla arcu. Phasellus
                quis
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <Image width={46} height={44} src={finances} alt="finances" />
              <h3 className="text-dark">Financing made easy</h3>
              <p className="text-light">
                Lorem ipsum dolor sit amet, elit. In nec nulla arcu. Phasellus
                quis
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <Image
                width={46}
                height={44}
                src={helpingHand}
                alt="helping hand"
              />
              <h3 className="text-dark">24/7 support</h3>
              <p className="text-light">
                Lorem ipsum dolor sit amet, elit. In nec nulla arcu. Phasellus
                quis
              </p>
            </div>
          </div>
          {/* <!-- end of real state service parts --> */}
        </div>
      </div>
    </>
  );
};

export default Service;
