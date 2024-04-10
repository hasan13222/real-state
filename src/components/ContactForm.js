"use client"
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const ContactForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Thanks",
      text: "Your message has been sent successfully",
      icon: "success",
    });
  }
  return (
    <>
      <div className="container contact_wrapper mt-5">
        <div className="row">
          <div className="col-12 shadow">
            <h2 className="text-dark">Post Comment</h2>
            <form onSubmit={submitHandler}>
              <div className="form-group row">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Your Name"
                    id="fullname"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    id="email"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="form-group row">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    id="subject"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    id="phone"
                    className="form-control"
                    pattern="[0-9+\- ]{3,20}"
                    title="please enter a phone number"
                    required
                  />
                </div>
              </div>

              <div className="form-group row">
                <div className="col-12">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    id="message"
                    cols="30"
                    rows="5"
                    className="form-control"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="row form-group">
                <div className="col-12 text-center">
                  <button type="submit" className="btn text-white">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
