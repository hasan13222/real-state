import TopSection from "@/app/home/TopSection";
import Navbar from "@/components/Navbar";
import "@/css/style.css";
import "@/css/responsive.css";
import "@/css/property.css";
import "@/css/property-responsive.css";
import { getHomes } from "@/utils/getHomes";
import Image from "next/image";
import PropertySlider from "../singleProperty/PropertySlider";
import FloorPlan from "../singleProperty/FloorPlan";
import LatestProperties from "../singleProperty/LatestProperties";
import ContactAgent from "../singleProperty/ContactAgent";

const page = async ({ params }) => {
  const homes = await getHomes();
  const singleHome = homes.find((h) => h.id === params.singleProperty);
  const latestHomes = homes.filter((h, i) => i < 3);

  
  return (
    <>
      <div className="container-fluid header_n_topSection text-white">
        <Navbar />
        <TopSection page={`Property Details of ${singleHome.name}`} />
      </div>
      <div className="container property_wrapper mt-5">
        <div className="row pro_inner">
          {/* <!-- property main section --> */}
          <div className="col-12 col-lg-8 pro_main">
            {/* <!-- pp heading --> */}
            <div className="row pp_heading">
              <div className="col-12 col-sm">
                <h3 className="text-dark">{singleHome.name}</h3>
                <span className="badge btn_purple text-white">For Sale</span>
                <p className="text-light">{singleHome.location}</p>
              </div>
              <div className="col-12 col-sm-3">
                <p className="text_purple">${singleHome.price}</p>
                <p className="text-light">$400/sq ft</p>
              </div>
            </div>
            {/* <!-- pp_heading --> */}
            {/* <!-- gallery --> */}
            <div className="row gallery shadow rounded">
              <div className="col-12">
                <h4 className="text-dark">Gallery</h4>
                <div className="thumb">
                  <Image
                    width={730}
                    height={421}
                    src={`/homeImages/${singleHome.image}`}
                    alt="gallery thumb"
                  />
                </div>
              </div>
              <div className="col-12 gallery-slide">
                <PropertySlider/>
              </div>
            </div>
            {/* <!-- end of gallery --> */}
            {/* <!-- description --> */}
            <div className="row pp_desc shadow rounded">
              <div className="col-12 ppd">
                <h4 className="text-dark">Description</h4>
                <p className="text-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla . Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est . Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni eos qui ratione voluptatem sequi nesciunt.
                  Neque porro quisquam est, qui dolorem.
                </p>
                <p className="text-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla . Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est . Sed ut
                  perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae
                  vitae dicta sunt explicabo. enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni eos qui ratione voluptatem sequi nesciunt.
                  Neque porro quisquam est, qui dolorem.
                </p>
                <hr />
              </div>
              <div className="col-12 ppdt">
                <div className="row">
                  <div className="col-12">
                    <h4 className="text-dark">Property Details</h4>
                  </div>
                  <div className="col-6 col-md-3">
                    <ul>
                      <li className="text-dark">Bedrooms:</li>
                      <li className="text-dark">Orientent:</li>
                      <li className="text-dark">Bathrooms:</li>
                      <li className="text-dark">Type:</li>
                      <li className="text-dark">Livingrooms:</li>
                    </ul>
                  </div>
                  <div className="col-6 col-md-3">
                    <ul>
                      <li className="text-light">Five</li>
                      <li className="text-light">East</li>
                      <li className="text-light">Six</li>
                      <li className="text-light">Private House</li>
                      <li className="text-light">Three</li>
                    </ul>
                  </div>
                  <div className="col-6 col-md-3">
                    <ul>
                      <li className="text-dark">Garages:</li>
                      <li className="text-dark">Rooms:</li>
                      <li className="text-dark">Area:</li>
                      <li className="text-dark">Plot size:</li>
                      <li className="text-dark">kitchens:</li>
                    </ul>
                  </div>
                  <div className="col-6 col-md-3">
                    <ul>
                      <li className="text-light">Three</li>
                      <li className="text-light">Two</li>
                      <li className="text-light">1800 sq ft</li>
                      <li className="text-light">300 x 200</li>
                      <li className="text-light">Three</li>
                    </ul>
                  </div>
                </div>
                <hr />
              </div>
              <div className="col-12 ppa">
                <div className="row">
                  <div className="col-12">
                    <h4 className="text-dark">Amenities</h4>
                  </div>
                  <div className="col-6 col-md-3">
                    <ul>
                      <li className="text-light">
                        <i className="fas fa-check"></i> &nbsp;Air Cond
                      </li>
                      <li className="text-light">
                        <i className="fas fa-check"></i> &nbsp;Dishwasher
                      </li>
                      <li className="text-light">
                        <i className="fas fa-check"></i> &nbsp;Parking
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-md-3">
                    <ul>
                      <li className="text-light">
                        <i className="fas fa-check"></i> &nbsp;Balcony
                      </li>
                      <li className="text-light">
                        <i className="fas fa-check"></i> &nbsp;Bedding
                      </li>
                      <li className="text-light">
                        <i className="fas fa-check"></i> &nbsp;Pool
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-md-3">
                    <ul>
                      <li className="text-light">
                        <i className="fas fa-check"></i> &nbsp;Internet
                      </li>
                      <li className="text-light">
                        <i className="fas fa-check"></i> &nbsp;Cable TV
                      </li>
                      <li className="text-light">
                        <i className="fas fa-check"></i> &nbsp;Fridge
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-md-3">
                    <ul>
                      <li className="text-light">
                        <i className="fas fa-check"></i> &nbsp;Swimming Pool
                      </li>
                      <li className="text-light">
                        <i className="fas fa-check"></i> &nbsp;Gym
                      </li>
                      <li className="text-light">
                        <i className="fas fa-check"></i> &nbsp;Security System
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end of description --> */}
            {/* <!-- floor plan --> */}
           {/* <Sold/> */}
           <FloorPlan/>
          </div>
          {/* <!-- end of property main section --> */}
          {/* <!-- sidebar --> */}
          <div className="col-12 col-lg-4 sidebar">
            {/* <!-- schedule row --> */}
            {/* <div className="row schedule shadow rounded">
              <div className="col-12">
                <h4 className="text-dark">Schedule a Tour</h4>
              </div>
              <div className="col-6 rounded dt d-flex justify-content-between">
                <p className="float-left text-light">10/10/2020</p>
                <span className="float-right text-light">
                  <i className="fas fa-calendar"></i>
                </span>
              </div>
              <div className="col-6 rounded dt d-flex justify-content-between">
                <p className="float-left text-light">10:10 Am</p>
                <span className="float-right text-light">
                  <i className="fas fa-clock"></i>
                </span>
              </div>
              <div className="col-6 text-center">
                <p className="text-dark">Adult</p>
                <div className="sps">
                  <span className="text_purple">
                    <i className="fas fa-minus"></i>
                  </span>
                  <span className="text-dark">0</span>
                  <span className="text_purple">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
              </div>
              <div className="col-6 text-center">
                <p className="text-dark">Children</p>
                <div className="sps">
                  <span className="text_purple">
                    <i className="fas fa-minus"></i>
                  </span>
                  <span className="text-dark">0</span>
                  <span className="text_purple">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
              </div>
              <div className="col-12 sbmt">
                <button className="btn btn_purple text-white">
                  Submit Request
                </button>
              </div>
            </div> */}
            {/* <!-- schedule row --> */}
            {/* <!-- contact agent--> */}
            <div className="row cnct shadow rounded">
              <div className="col-12">
                <h4 className="text-dark">Contact an Agent</h4>
              </div>
              <div className="col-4 cnct_img rounded-circle">
                <Image
                  width={56}
                  height={56}
                  src="/propertyImages/aljari-joseph.png"
                  alt="aljari joseph"
                />
              </div>
              <div className="col-8 cnct_dt">
                <h4 className="text-dark">Aljari Joseph</h4>
                <h6 className="text-light">Real Estate Agent</h6>
              </div>
              <div className="col-12 cnct_info">
                <ul>
                  <li className="address">
                    <i className="fas fa-map-marker text_purple"></i> 95 South
                    Park Avenue, Australia
                  </li>
                  <li className="call">
                    <i className="fas fa-phone-alt text_purple"></i> 1234 567890
                  </li>
                  <li className="mail" href="mailto:realestate@support.info">
                    <i className="fas fa-envelope text_purple"></i>{" "}
                    realestate@support.info
                  </li>
                </ul>
                <hr className="mt-4" />
              </div>
              <div className="col-12 message">
                <h4 className="text-dark">Message</h4>
                <ContactAgent/>
              </div>
            </div>
            {/* <!-- end of contact agent--> */}
            {/* <!-- latest property row --> */}
            <LatestProperties items={latestHomes} />
            {/* <!-- end of latest property -->					 */}
          </div>
          {/* <!-- end of sidebar --> */}
        </div>
      </div>
    </>
  );
};

export default page;
