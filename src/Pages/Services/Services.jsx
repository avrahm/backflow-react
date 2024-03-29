import React from "react";

import TestingImg from "../../images/testing.png";
import InstallationImg from "../../images/preventing.jpg";
import RepairsImg from "../../images/repairs.jpg";
import LocationBlogItem from "../../Components/BlogItems/LocationBlogItem";
import BackflowInfoBlogItem from "../../Components/BlogItems/BackflowInfoBlogItem";
// import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";

function MyModal(props) {
  return (
    <Modal
      {...props}
      // size="lg"
      aria-labelledby="exampleModalLabel"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="exampleModalLabel">
          Schedule an appointment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: "30px" }}>
        <ContactInfo />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="secondary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function Services() {
  const [modalShow, setModalShow] = useState(false);

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
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => {
                    setModalShow(!modalShow);
                  }}
                >
                  Schedule an appointment
                </Button>
              </p>
            </div>
            <div className="col-md-5">
              <img
                alt="Testing Kit"
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
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => {
                    setModalShow(!modalShow);
                  }}
                >
                  Schedule an appointment
                </Button>
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                alt="Repair Pipe illustration"
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
                <Button
                  variant="info"
                  size="sm"
                  onClick={() => {
                    setModalShow(!modalShow);
                  }}
                >
                  Schedule an appointment
                </Button>
              </p>
            </div>
            <div className="col-md-5">
              <img
                alt="Backflow Installation Assembly"
                src={InstallationImg}
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
      <MyModal show={modalShow} onHide={() => setModalShow(false)} />
    </main>
  );
}
