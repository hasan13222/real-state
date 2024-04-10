import Image from "next/image";
import perth from "@/images/home/perth.png";
import sydney from "@/images/home/sydney.png";
import melbourne from "@/images/home/melbourne.png";
import brisbane from "@/images/home/brisbane.png";

const Cities = () => {
  return (
    <>
      <div className="container cities_wrapper">
        <div className="row ct_heading text-center">
          <div className="col-12">
            <h3 className="mt-5 text-light">Find Properties</h3>
            <h2 className="text-dark mb-4">Find Properties in These Cities</h2>
          </div>
        </div>
        {/* <!-- first row of two cities --> */}
        <div className="row ct_inner text-center">
          {/* <!-- perth --> */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              <Image
                width={700}
                height={400}
                className="card-img-top"
                src={perth}
                alt="perth"
              />
              <div className="card-img-overlay text-white">
                <h4 className="card-title">Perth</h4>
                <p className="card-text">36 Properties</p>
              </div>
            </div>
          </div>
          {/* <!-- end of perth --> */}
          {/* <!-- sydney --> */}
          <div className="col-lg-8 col-md-6 col-12">
            <div className="card">
              <Image
                width={700}
                height={400}
                className="card-img-top"
                src={sydney}
                alt="sydney"
              />
              <div className="card-img-overlay text-white">
                <h4 className="card-title">Sydney</h4>
                <p className="card-text">85 Properties</p>
              </div>
            </div>
          </div>
          {/* <!-- end of sydney --> */}
        </div>
        {/* <!-- second row of two cities --> */}
        <div className="row ct_inner text-center">
          <div className="col-lg-4 col-md-6 col-12 order-last">
            <div className="card">
              <Image
                width={700}
                height={400}
                className="card-img-top"
                src={melbourne}
                alt="melbourne"
              />
              <div className="card-img-overlay text-white">
                <h4 className="card-title">Melbourne</h4>
                <p className="card-text">85 Properties</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-12 order-first">
            <div className="card">
              <Image
                width={700}
                height={400}
                className="card-img-top"
                src={brisbane}
                alt="brisbane"
              />
              <div className="card-img-overlay text-white">
                <h4 className="card-title">Brisbane</h4>
                <p className="card-text">36 Properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cities;
