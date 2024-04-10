"use client";
import Property from "@/app/shared/Property";
import { Fragment, useEffect, useState } from "react";

const PropertyLists = ({ propertyFilter }) => {
  const [homes, setHomes] = useState([]);
  const [showHomes, setShowHomes] = useState([]);
  const [activePage, setActivePage] = useState(0);

  const pageHandler = () => {
    const pages = Math.ceil(showHomes.length / 9);
    if (activePage < pages - 1) {
      setActivePage((prev) => prev + 1);
    } else {
      setActivePage(0);
    }
  };

  useEffect(() => {
    fetch("/homes.json")
      .then((res) => res.json())
      .then((data) => {
        setHomes(data);
        setShowHomes(data);
      });
  }, []);

  useEffect(() => {
    if (Object.keys(propertyFilter).length !== 0) {
      const filterData = homes.filter((home) => {
        const isLocation = propertyFilter.location === "0";
        const isType = propertyFilter.type === "0";
        const isPrice = propertyFilter.price === "0";

        return (
          (isLocation ||
            home.location.toLowerCase().includes(propertyFilter.location)) &&
          (isType || home.type === propertyFilter.type) &&
          (isPrice || home.price < Number(propertyFilter.price))
        );
      });
      setShowHomes(filterData);
    }
  }, [propertyFilter, homes]);
  return (
    <>
      <div className="container ex_offer_wrapper">
        <div className="row ex_offer">
          {/* <!-- offer lists --> */}
          {showHomes.map((item, i) => {
            if (i >= activePage * 9 && i < activePage * 9 + 9) {
              return (
                <Fragment key={item.name + i}>
                  <Property item={item} />
                </Fragment>
              );
            }
          })}
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <button onClick={pageHandler} className="btn btn_purple text-white">
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyLists;
