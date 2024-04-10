import Navbar from "@/components/Navbar";
import TopSection from "../home/TopSection";
import "@/css/style.css";
import "@/css/contactus.css";
import "@/css/responsive.css";
import "@/css/contactus-responsive.css";
import ContactForm from "@/components/ContactForm";
const page = () => {
  return (
    <>
      <div className="container-fluid header_n_topSection text-white">
        <Navbar />
        <TopSection page={"Contact Us"} />
      </div>
      <ContactForm/>
    </>
  );
};

export default page;
