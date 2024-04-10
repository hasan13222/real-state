'use client'
import Image from "next/image";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import sendIcon from "@/images/home/send.png";

const Newsletter = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Good job!",
      text: "Yuor subscription is successful!",
      icon: "success",
    });
  };
  return (
    <>
      <div className="col-12 text-md-left text-center col-md-4">
        <h4>Newsletter</h4>
        <p>
          Sign Up for Our Newsletter to get Latest Updates and Offers. Subscribe
          to receive news in your inbox.
        </p>
        <form onSubmit={submitHandler} action="post">
          <input
            type="email"
            className="form-control text_purple"
            placeholder="Enter Your Email"
          />
          <button type="submit" className="btn send">
            <Image width={19} height={19} src={sendIcon} alt="submit" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Newsletter;
