"use client"
const PropertySearch = ({homes, setShowHomes, setPropertyFilter}) => {

  const submitHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const location = form.sellist1.value;
    const type = form.sellist2.value;
    const price = form.sellist3.value;
    setPropertyFilter({
      location,
      type,
      price
    });
  }
  return (
    <>
      {/* <!-- PROPERTY SEARCH SECTION --> */}
      <div id="propertySearch" className="container search_property_wrapper">
        <form onSubmit={submitHandler} action="/action_page.php">
          {/* <!-- form input parts --> */}
          <div className="row">
            <div className="col-md-3 col-12">
              <label htmlFor="sel1">Location</label>
              <select className="form-control" id="sel1" name="sellist1">
                <option defaultValue="0" value="0"  className="text-light">
                  locality Name
                </option>
                <option value="new castle" className="text-light">New Castle</option>
                <option value="darwin" className="text-light">Darwin</option>
                <option value="canberra" className="text-light">Canberra</option>
                <option value="sydney" className="text-light">Sydney</option>
              </select>
            </div>
            <div className="col-md-3 col-12">
              <label htmlFor="sel2">Property Type</label>
              <select className="form-control" id="sel2" name="sellist2">
                <option defaultValue="0" value="0" className="text-light">
                  Type
                </option>
                <option value="home" className="text-light">Home</option>
                <option value="apartment" className="text-light">Apartment</option>
                <option value="office" className="text-light">Office</option>
              </select>
            </div>
            <div className="col-md-3 col-12">
              <label htmlFor="sel3">Price Limit</label>
              <select className="form-control" id="sel3" name="sellist3">
                <option defaultValue="0" value="0">Select Option</option>
                <option value={6000} className="text-light">
                  $6000
                </option>
                <option value={5000} className="text-light">$5000</option>
                <option value={3000} className="text-light">$3000</option>
                <option value={2000} className="text-light">$2000</option>
              </select>
            </div>
            <div className="col-md-3 col-12">
              <button type="submit" className="btn btn_purple text-white">
                Search Property
              </button>
            </div>
          </div>
          {/* <!-- end of form input parts --> */}
        </form>
      </div>
      {/* <!-- END OF PROPERTY SEARCH SECTION --> */}
    </>
  );
};

export default PropertySearch;
