import Navbar from "@/components/Navbar";
import TopSection from "./home/TopSection";
import PropertySearch from "../components/PropertySearch";
import ExclusiveOffer from "./home/ExclusiveOffer";
import Service from "./home/Service";
import Cities from "./home/Cities";
import Agents from "./home/Agents";
import Testimonial from "./home/Testimonial";
import Blog from "./home/Blog";

import "@/css/style.css";
import "@/css/responsive.css";

export default function Home() {
  return (
    <>
      <div className="container-fluid header_n_topSection text-white">
        <Navbar />
        <TopSection page={"home"} />
      </div>
      <ExclusiveOffer />
      <Service />
      <Cities />
      <Agents />
      <Testimonial />
      <Blog />
    </>
  );
}
