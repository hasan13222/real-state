"use client"
const ContactAgent = () => {
  return (
    <>
      <form onSubmit={() => alert("Thanks for messaging us")}>
        <input
          type="text"
          placeholder="Your Name"
          className="form-control text-light"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="form-control text-light"
        />
        <input
          type="text"
          placeholder="Phone"
          className="form-control text-light"
        />
        <input
          type="text"
          placeholder="Type Your Message"
          className="form-control text-light"
        />
        <button className="btn btn_purple text-white">Send Message</button>
      </form>
    </>
  );
};

export default ContactAgent;
