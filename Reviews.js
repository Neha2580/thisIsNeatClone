import React from "react";
import "./Reviews.css";
import Logo from '../images/download.png';
function Home() {
  return (
    <section>
      <div className="container">
        <h1 className="section-header pt-4 mt-4">Our Reviews</h1>
        <br />
        <p className="paragraph text-center ">
          We believe our work speaks for itself, but our customers vouch for us
          too. 
          <br/>Here’s just a few of the reviews that make up our
          <a href="https://www.google.com.au/search?rlz=1C5CHFA_enAU763AU763&ei=dk3SXJjpC4ao_QbswquQAQ&q=this+is+neat+cleaning+sydney&oq=this+is+neat+cleaning+sydney&gs_l=psy-ab.3..33i21.13806.14467..14553...0.0..0.218.892.0j4j1......0....1..gws-wiz.......0i71j0i22i30j33i22i29i30.ySpCyBxpw1Q#lrd=0x6b12b9f8d4ae6a43:0x4d6a4d6ebad0981f,1,,,">
            {" "}
            4.8 star rating{" "}
          </a>
          on <img className="google" src={Logo}/>.
        </p>

        <div className="testimonial-view">
          <div
            className="carousel slide"
            id="testimonialcarousel"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {/* testimonial 1 */}
              <div className="carousel-item-active">
                <div className="block">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="user">
                        <div className="image">
                          <img
                            src="https://thisisneat.com.au/wp-content/themes/neat/shared/img/customer-female-3.svg"
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <h2 className="user-name">Hayley M.</h2>
                          <h4>RANDWICK - 2 YEARS AGO</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="content">
                        <p>
                          Wonderful service, easy online booking, clear and
                          transparent pricing from the start. They sent text
                          updates with time of arrival and finishing, about an
                          hour after finishing I got sent a detailed email with
                          before and after pictures. My real estate could not
                          fault the cleaning and I received my full bond refund
                          48hrs after the final inspection. Very happy with the
                          service, could not fault!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* testimonial 2 */}

              <div className="carousel-item-active">
                <div className="block">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="user">
                        <div className="image">
                          <img
                            src="https://thisisneat.com.au/wp-content/themes/neat/shared/img/customer-female-2.svg"
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <h2 className="user-name">Kristy T.</h2>
                          <h4>CONCORD - 2 YEARS AGO</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="content">
                        <p>
                          Our rental bond cleaner called just before the agreed
                          time to advise they would be 5mins late - could NOT
                          fault their timeliness or communication. They did an
                          excellent and very thorough job. I really appreciated
                          the email at the end of the clean with before and
                          after photos so I didn't have to drive all the way
                          back to my old house. Our real estate did not raise
                          one single concern with us at all and we got our bond
                          back. Neat followed up...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* testimonial 3 */}
              <div className="carousel-item-active">
                <div className="block">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="user">
                        <div className="image">
                          <img
                            src="https://thisisneat.com.au/wp-content/themes/neat/shared/img/customer-female-4.svg"
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <h2 className="user-name">Sarah M.</h2>
                          <h4>PENSHURST - 2 YEARS AGO</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="content">
                        <p>
                          The team did an excellent job - I was very impressed.
                          Had no problem getting my bond back. Thank you! May be
                          in touch for a spring clean down the track.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* testimonial 4 */}
              <div className="carousel-item-active">
                <div className="block">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="user">
                        <div className="image">
                          <img
                            src="https://thisisneat.com.au/wp-content/themes/neat/shared/img/customer-male-1.svg"
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <h2 className="user-name">Jo G.</h2>
                          <h4>MANLY - 2 YEARS AGO</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="content">
                        <p>
                          These guys did the end of lease clean for us and it
                          was awesome. They gave a timeslot of an hour for
                          arrival but arrived right at the start of that. They
                          did a fantastic job of cleaning and afterwards sent
                          through a before and after picture of all areas of the
                          flat which I’ve never had from a cleaning company
                          before.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* testimonial 4 */}
              <div className="carousel-item-active">
                <div className="block">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="user">
                        <div className="image">
                          <img
                            src="https://thisisneat.com.au/wp-content/themes/neat/shared/img/customer-male-2.svg"
                            alt=""
                          />
                        </div>
                        <div className="info">
                          <h2 className="user-name">Adrian S.</h2>
                          <h4>MARRICKVILLE - 2 YEARS AGO</h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="content">
                        <p>
                          Great experience and brilliant customer service. The
                          cleaning was top notch and would recommend.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#testimonialcarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>

            <a
              className="carousel-control-next"
              href="#testimonialcarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
