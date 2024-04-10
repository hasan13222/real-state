import Newsletter from "@/components/Newsletter";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid footer_bg">
          <div className="container footer_wrapper">
            <div className="row ft_inner text-white">
              {/* <!-- real-estate --> */}
              <div className="col-12 text-md-left text-center col-md-4">
                <h4>Real Estate</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
                  incidunt architecto soluta laboriosam, perspiciatis, esse.
                </p>
                <ul>
                  <li className="address">95 South Park Avenue, Australia</li>
                  <li className="call">1234 567890</li>
                  <li className="mail" href="mailto:realestate@support.info">
                    realestate@support.info
                  </li>
                </ul>
              </div>
              {/* <!-- end of real-estate --> */}
              {/* <!-- twitter-feeds --> */}
              <div className="col-12 text-md-left tf_wrapper text-center col-md-4">
                <h4>Twitter Feeds</h4>
                <ul>
                  <li className="twitter">
                    @findhouses all share them with me baby said inspet. <br />
                    <span className="time">about 5 days ago</span>
                  </li>
                  <li className="twitter">
                    @findhouses all share them with me baby said inspet. <br />
                    <span className="time">about 5 days ago</span>
                  </li>
                  <li className="twitter">
                    @findhouses all share them with me baby said inspet. <br />
                    <span className="time">about 5 days ago</span>
                  </li>
                </ul>
              </div>
              {/* <!-- end of twitter-feeds --> */}

              <Newsletter />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
