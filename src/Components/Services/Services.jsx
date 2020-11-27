import React from "react";

import TestingImg from "../../images/testing.png";
import PreventingImg from "../../images/preventing.jpg";
import RepairsImg from "../../images/repairs.jpg";
import LocationBlogItem from "../BlogItems/LocationBlogItem";
import BackflowInfoBlogItem from "../BlogItems/BackflowInfoBlogItem";

export default function Services() {
  return (
    <main role="main" className="container">
      <div className="main">
        <div className="col-md-12">
          <h1>Services</h1>

          <p>
            Backflow is the unintended flow of untreated, polluted, or
            contaminated water in a reverse direction . That would be from an
            end user back into the water distribution system. This distribution
            system could be the public water supply or the plumbing in your
            business or home.
          </p>

          <hr className="water-hr" id="testing" />
          <div className="row featurette anchor">
            <div className="col-md-7">
              <h2 className="featurette-heading">Backflow Testing</h2>
              <p className="lead">
                Backflow prevention systems are required to be tested annually
                by licensed individuals. Call us to schedule your inspection or
                fill out the estimate form and we’ll contact you shortly.
              </p>
              <p>
                <button
                  type="button"
                  className="btn btn-info btn-sm"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Schedule an appointment
                </button>
              </p>
            </div>
            <div className="col-md-5">
              <img
                src={TestingImg}
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
              />
            </div>
          </div>

          <hr className="water-hr" id="repairs" />

          <div className="row featurette anchor">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">Backflow Repairs</h2>
              <p className="lead">
                We are backflow repair experts. If one fails, we can repair the
                device 90% of the time. Other contractors will often quote a
                replacement. That costs you more money and may not be necessary.
              </p>
              <p>
                <button
                  type="button"
                  className="btn btn-info btn-sm"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Schedule an appointment
                </button>
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                src={RepairsImg}
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
              />
            </div>
          </div>

          <hr className="water-hr" id="installation" />

          <div className="row featurette anchor">
            <div className="col-md-7">
              <h2 className="featurette-heading">Backflow Installation</h2>
              <p className="lead">
                We install all sizes of backflow prevention assemblies. From ½”
                to over 10” we will come up with a scope of work and plan of
                action to bring your property into compliance.
              </p>
              <p>
                <button
                  type="button"
                  className="btn btn-info btn-sm"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Schedule an appointment
                </button>
              </p>
            </div>
            <div className="col-md-5">
              <img
                src={PreventingImg}
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width="500"
                height="500"
              />
            </div>
          </div>

          <hr className="water-hr" />

          <div className="row mb-2">
            <BackflowInfoBlogItem />
            <LocationBlogItem />
          </div>
        </div>
      </div>
    </main>
  );
}
