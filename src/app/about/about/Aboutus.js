import aboutImg from "@/images/about/about.png";
import Image from "next/image";
import Link from "next/link";

const Aboutus = () => {
  return (
    <>
      <div className="container about_wrapper">
        <div className="row mt-5">
          <div className="col-12 col-md-6">
            <h2 className="text-dark">About Real Estate</h2>
            <p className="text-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              voluptatibus incidunt cum? Atque quasi eum debitis optio ab. Esse
              officiis tempora possimus odio rerum aperiam ratione, sunt. Lorem
              dolor sit amet, consectetur adipisicing elit sunt.
            </p>
            <p className="text-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              voluptatibus incidunt cum? Atque quasi eum debitis optio ab. Esse
              officiis tempora possimus odio rerum aperiam ratione, sunt. Lorem
              dolor sit amet, consectetur adipisicing elit sunt.
            </p>
            <Link href="/contact">
              <button className="btn btn_purple text-white">Contact Us</button>
            </Link>
          </div>
          <div className="col-12 col-md-6 img_col">
            <Image width={540} height={501} src={aboutImg} alt="about" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
