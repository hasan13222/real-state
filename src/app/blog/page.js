import Navbar from "@/components/Navbar";
import TopSection from "../home/TopSection";
import "@/css/style.css";
import "@/css/blog.css";
import "@/css/responsive.css";
import Posts from "@/components/Posts";

const page = () => {
  return (
    <>
      <div className="container-fluid header_n_topSection text-white">
        <Navbar />
        <TopSection page={"Blog"} />
      </div>
      <Posts/>
    </>
  );
};

export default page;
