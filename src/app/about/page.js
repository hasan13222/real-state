import Navbar from "@/components/Navbar";
import TopSection from "../home/TopSection";
import "@/css/style.css";
import "@/css/aboutus.css";
import "@/css/responsive.css";
import "@/css/aboutus-responsive.css";
import Aboutus from "./about/Aboutus";

const page = () => {
  return (
    <>
      <div className="container-fluid header_n_topSection text-white">
        <Navbar />
        <TopSection page={"About Us"} />
      </div>
      <Aboutus/>
    </>
  );
};

export default page;
