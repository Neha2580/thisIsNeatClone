import React from "react";

function Aboutus() {
  return (
    <div className="section" id="services">
      <div className="container">
        <div className="row pt-4 pb-4">
          <div className="col-md-12 text-center">
            <h2 className="main-heading" >Our Services.</h2>
            <div className=" underline mx-auto"></div>
            <p className="paragraph2 text-center">
              Dependable, professional, and experienced. <br/>Choose from any of our
              bond cleaning services and we’ll handle the rest.
            </p>
          </div>
        </div>
      </div>

      <div className="containercard">
        <div className="row pt-4 mb-4">
          <div className="col-3">
            <div class="card pl-4">
              <img src="https://i0.wp.com/thisisneat.com.au/wp-content/uploads/2020/01/end-of-lease-cleaning-service.jpg?resize=560%2C350&ssl=1" class="card-img-top" alt="..." />
              <div class="card-body">
               
                <h5 class="card-title" >End of Lease Cleaning</h5>
                <p class="card-text">
                With our famous 72-hour bond back guarantee*, our cleaners always ensure tenants recover their full rental deposits.
                </p>
                <br/>
                <br/>
                <a href="#" class="btn btn-light">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card ">
              <img src="https://i0.wp.com/thisisneat.com.au/wp-content/uploads/2020/01/vacate-cleaning-service.jpg?resize=560%2C350&ssl=1" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Vacate Cleaning</h5>
                <br/>
               
                <p class="card-text">
                Our 5-star rated cleaners specialise in helping renters pass their final vacate inspections.
                </p>
                <br/>
                <br/>
                <a href="#" class="btn btn-light">
                  Learn More 
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card">
              <img src="https://i0.wp.com/thisisneat.com.au/wp-content/uploads/2020/01/move-in-move-out-cleaning-service.jpg?resize=560%2C350&ssl=1" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Moving Cleaning</h5>
                <p class="card-text">
                Our cleaning teams will make sure your property is ready for sale, a rental inspection, or for your family to move into.
                </p>
                <br/>
                <br/>
                <a href="#" class="btn btn-light">
                  Learn More 
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Aboutus;
