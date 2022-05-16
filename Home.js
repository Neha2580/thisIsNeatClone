import React from "react";
import image from "../images/img 1.jpg";
import image1  from "../images/img 2.jpg";

function Home() {
  return (
    <div className="home section">
      <div className=" container">
        <div className="row ">
          <div className="col-md-12 text-center " >
            <h2 className="main-heading">You move out, we clean up.</h2>
            <div className="underline mx-auto"></div>
            <p>The simplest way to get your bond back. Guaranteed.*</p>
          
            <div className="imageBackground row justify-content-md-center">
              <div className="haikei">
              <div className="image1 col col-lg-4 mx-auto " data-aos="zoom-in-up"  data-aos-duration="2000" >
                
                <img src={image} class="img-fluid" alt="" />
              </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
