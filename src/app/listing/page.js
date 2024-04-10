import Navbar from "@/components/Navbar";
import TopSection from "../home/TopSection";
import "@/css/style.css";
import "@/css/listing.css";
import "@/css/responsive.css";
import Listing from "@/components/Listing";

const page = () => {
  return (
    <>
      <div className="container-fluid header_n_topSection text-white">
        <Navbar />
        <TopSection page={"Property Lists"} />
      </div>
      <Listing/>
    </>
  );
};

export default page;
