"use client";
const Comment = () => {
  return (
    <>
      <form
        onSubmit={() =>
          alert("Your comment is pending. Please wait to approve.")
        }
      >
        <div class="form-group row">
          <div class="col-12 col-sm-6">
            <input
              type="text"
              placeholder="Your Name"
              class="text-dark shadow form-control"
            />
          </div>
          <div class="col-12 col-sm-6">
            <input
              type="email"
              placeholder="Your Email"
              class="text-dark shadow form-control"
            />
          </div>
        </div>
        <div class="form-group row">
          <div class="col-12">
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              cols="30"
              rows="5"
              class="form-control shadow text-dark"
            ></textarea>
          </div>
        </div>
        <div class="form-group row text-center">
          <div class="col-12">
            <button class="btn btn_purple text-white">Submit</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Comment;
