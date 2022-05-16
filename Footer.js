import React from "react";

function Footer() {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container">
        <div className="row pt-4 pb-4">
          <div className="col-md-3">
            <h6>Neat</h6>

            <p className="text-white pt-4">
              This is Neat is a bond cleaning service keeping tenants, real
              estate agents and property managers happy all across Sydney and
              Melbourne.
            </p>
          </div>
          <div className="col-md-3">
            <h6>SERVICES</h6>
            <hr />
            <a href="#services" className="text-white text-decoration:none">End of Lease Cleaning</a>
            <br/>
            <a href="#services" className="text-white text-decoration:none">Vacate Cleaning</a>
            <br/>
            <a href="#services" className="text-white text-decoration:none">Moving Cleaning</a>
          
          </div>
          <div className="col-md-3">
            <h6>LOCATIONS</h6>
            <hr />
            <h6>Melbourne</h6>
            <h6>Inner West</h6>
            <h6>Eastern Suburbs</h6>
            <h6>Northern Beaches</h6>
            <h6>North Shore</h6>
            <h6>Surry Hills</h6>
            <h6>Bondi</h6>
            <h6>Parramatta</h6>
          </div>
          <div className="col-md-2">
            <h6>CONTACT</h6>
            <hr />
            <h6>This is Neat Cleaning</h6>
            <h6>39 Douglas Street</h6>
            <h6>Redfern, NSW 2016</h6>
            <h6>Australia</h6>
            <h6>0488 845 135</h6>
            <br/>
            <h6>hello@thisisneat.com.au</h6>
          </div>
        </div>
        <br/>
        <hr />
        <br/>
        <div className="row pt-4 pb-4">
          <h6>* Our Bond Back Guarantee:</h6>
          <br />
          <p className="para1 pt-4">
            1. You are required to confirm with your real estate agent which
            specific cleaning services are required under your lease agreement.
            You must ensure that you tick the appropriate checkboxes on our
            cleaning checklist when booking a Clean.
          </p>
          <br />
          <p className="para2">
            2. If, within 72 hours after your Clean, we are notified by you or
            your real estate agent that a part of our Services (as described in
            your Booking and in our cleaning checklist) has not been completed
            satisfactorily to allow your tenancy bond to be released back to
            you, we will come back to your Residence to re-perform those
            Services for no additional fee (Bond Back Guarantee). Any such
            notification should include photographs evidencing the areas that
            need to be addressed and we will make an assessment of whether the
            area is cleanable.
          </p>
          <br />
          <p>
            3. Our Bond Back Guarantee does not cover the following:
            <br />
            (a) cleaning services not described in your Booking or cleaning
            checklist available on the Site;
            <br />
            (b) permanent damage at your Residence, including smoke stains,
            carpet stains, hard water stains, wall marks, mould, rusting, grease
            stains, and permanent odours; and
            <br />
            (c) areas which, in our professional opinion, cannot be cleaned.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
