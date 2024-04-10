"use client";

import Image from "next/image";
import { useState } from "react";

const FloorPlan = () => {
  const initFloorState = {
    first_floor: true,
    second_floor: false,
    third_floor: false,
  };
  const [floorState, setFloorState] = useState(initFloorState);

  return (
    <>
      <div className="floor_plan row shadow rounded">
        <div className="col-12">
          <h4 className="text-dark">Floor Plans</h4>
        </div>
        <div className="col-12">
          <div className="flp row">
            <div
              className="col-12 rounded clp"
              onClick={() =>
                setFloorState({
                  ...initFloorState,
                  first_floor: !floorState.first_floor,
                })
              }
            >
              <div className="row flp_head">
                <div className="col-2">
                  <h5 className="text-dark">First Floor</h5>
                </div>
                <div className="col-2">
                  <span className="text-light">Size: &nbsp;</span>
                  <span className="text-dark">1800sqft</span>
                </div>
                <div className="col-2">
                  <span className="text-light">Rooms: &nbsp;</span>
                  <span className="text-dark">670sqft</span>
                </div>
                <div className="col-2">
                  <span className="text-light">Bath: &nbsp;</span>
                  <span className="text-dark">120sqft</span>
                </div>
                <div className="col-2">
                  <span className="text-light">Price: &nbsp;</span>
                  <span className="text-dark">$50,000</span>
                </div>
                <div className="col-2 text-center">
                  <i className="fas fa-angle-down"></i>
                </div>
              </div>
            </div>
            <div
              className="col-12 clp_show"
              style={
                floorState.first_floor
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <Image
                width={550}
                height={350}
                src="/propertyImages/flp.png"
                alt="floor plan"
              />
            </div>
          </div>
          <div className="flp row">
            <div
              className="col-12 rounded clp"
              onClick={() =>
                setFloorState({
                  ...initFloorState,
                  first_floor: false,
                  second_floor: !floorState.second_floor,
                })
              }
            >
              <div className="row flp_head">
                <div className="col-2">
                  <h5 className="text-dark">Second Floor</h5>
                </div>
                <div className="col-2">
                  <span className="text-light">Size: &nbsp;</span>
                  <span className="text-dark">1800sqft</span>
                </div>
                <div className="col-2">
                  <span className="text-light">Rooms: &nbsp;</span>
                  <span className="text-dark">670sqft</span>
                </div>
                <div className="col-2">
                  <span className="text-light">Bath: &nbsp;</span>
                  <span className="text-dark">120sqft</span>
                </div>
                <div className="col-2">
                  <span className="text-light">Price: &nbsp;</span>
                  <span className="text-dark">$50,000</span>
                </div>
                <div className="col-2 text-center">
                  <i className="fas fa-angle-down"></i>
                </div>
              </div>
            </div>
            <div className="col-12 clp_show" 
            style={
                floorState.second_floor
                  ? { display: "block" }
                  : { display: "none" }
              }>
              <Image
                width={550}
                height={350}
                src="/propertyImages/flp.png"
                alt="floor plan"
              />
            </div>
          </div>
          <div className="flp row">
            <div
              className="col-12 rounded clp"
              onClick={() =>
                setFloorState({
                  ...initFloorState,
                  first_floor: false,
                  third_floor: !floorState.third_floor,
                })
              }
            >
              <div className="row flp_head">
                <div className="col-2">
                  <h5 className="text-dark">Third Floor</h5>
                </div>
                <div className="col-2">
                  <span className="text-light">Size: &nbsp;</span>
                  <span className="text-dark">1800sqft</span>
                </div>
                <div className="col-2">
                  <span className="text-light">Rooms: &nbsp;</span>
                  <span className="text-dark">670sqft</span>
                </div>
                <div className="col-2">
                  <span className="text-light">Bath: &nbsp;</span>
                  <span className="text-dark">120sqft</span>
                </div>
                <div className="col-2">
                  <span className="text-light">Price: &nbsp;</span>
                  <span className="text-dark">$50,000</span>
                </div>
                <div className="col-2 text-center">
                  <i className="fas fa-angle-down"></i>
                </div>
              </div>
            </div>
            <div className="col-12 clp_show" 
            style={
                floorState.third_floor
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <Image
                width={550}
                height={350}
                src="/propertyImages/flp.png"
                alt="floor plan"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloorPlan;
