"use client";
import PropertySearch from "@/components/PropertySearch";
import PropertyLists from "@/components/PropertyLists";
import { useState } from "react";

const Listing = () => {
  const [propertyFilter, setPropertyFilter] = useState({});
  return (
    <>
      <PropertySearch
        setPropertyFilter={setPropertyFilter}
      />
      <PropertyLists
        propertyFilter={propertyFilter}
      />
    </>
  );
};

export default Listing;
