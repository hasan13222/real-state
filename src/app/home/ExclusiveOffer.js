import { getHomes } from "@/utils/getHomes";
import { Fragment } from "react";
import Property from "../shared/Property";

const ExclusiveOffer = async () => {
  const homes = await getHomes();
  return (
    <>
      <div className="container ex_offer_wrapper">
        <div className="row text-center ex_offer_heading">
          <div className="col-12">
            <h3 className="text-light mt-5">What We Offer</h3>
            <h2 className="text-dark">Exclusive Offer For You</h2>
          </div>
        </div>
        <div className="row ex_offer">
          {/* <!-- offer lists --> */}
          {homes.map((item, i) => {
            if (i < 6){
              return (
                <Fragment key={item.name + i}>
                  <Property item={item}/>
                </Fragment>
              )
            }
          })}
        </div>
      </div>
    </>
  );
};

export default ExclusiveOffer;
