import SearchProperty from "@/components/SearchProperty";

const TopSection = ({ page }) => {
  return (
    <>
      {/* <!-- top SECTION --> */}
      <div className="container top_section_wrapper">
        <div className="row text-center">
          <div className="col-12">
            {page === "home" ? (
              <h3>We Have Over Million Properties For You</h3>
            ) : (
              ""
            )}
            <h2 className="display-4">
              {page === "home" ? "Find Your Dream Home" : page}
            </h2>
            {page === "home" ? <SearchProperty /> : ""}
          </div>
        </div>
      </div>
      {/* <!-- END OF top SECTION --> */}
    </>
  );
};

export default TopSection;
