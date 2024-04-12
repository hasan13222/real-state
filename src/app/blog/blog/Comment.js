"use client";
const Comment = () => {
  return (
    <>
      <form
        onSubmit={() =>
          alert("Your comment is pending. Please wait to approve.")
        }
      >
        <div className="form-group row">
          <div className="col-12 col-sm-6">
            <input
              type="text"
              placeholder="Your Name"
              className="text-dark shadow form-control"
            />
          </div>
          <div className="col-12 col-sm-6">
            <input
              type="email"
              placeholder="Your Email"
              className="text-dark shadow form-control"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-12">
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              cols="30"
              rows="5"
              className="form-control shadow text-dark"
            ></textarea>
          </div>
        </div>
        <div className="form-group row text-center">
          <div className="col-12">
            <button className="btn btn_purple text-white">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Comment;
