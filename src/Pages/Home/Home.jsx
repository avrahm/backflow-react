import { Link } from "react-router-dom";
import ControlledCarousel from "../../Components/Carousel/Carousel";

import TestingImg from "../../images/testing.png";
import InstallationImg from "../../images/preventing.jpg";
import RepairsImg from "../../images/repairs.jpg";
import BackflowDiagramImg from "../../images/backflow-diagram.png";
import NorthGAMapImg from "../../images/north-ga-county-map.jpg";
import { NavHashLink } from "react-router-hash-link";

export default function Home() {
  return (
    <div classNameName="main">
      <ControlledCarousel />
      <div className="container marketing">
        <h1 className="featurette-heading text-center font-weight-bolder">
          Services
        </h1>
        <div className="row">
          <div className="col-lg-4">
            <img
              alt="Testing Kit"
              src={TestingImg}
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
            />
            <h3>Backflow Testing</h3>
            <p>
              Backflow prevention systems are required to be tested annually by
              licensed individuals. Call us to schedule your inspection or fill
              out the estimate form and we’ll contact you shortly.
            </p>
            <p>
              <NavHashLink className="btn btn-secondary" to="/services#testing">
                View services &raquo;
              </NavHashLink>
            </p>
          </div>

          <div className="col-lg-4">
            <img
              alt="Repair Pipe illustration"
              src={RepairsImg}
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
            />
            <h3>Backflow Repairs</h3>
            <p>
              We are backflow repair experts. If one fails, we can repair the
              device 90% of the time. Other contractors will often quote a
              replacement. That costs you more money and may not be necessary.
            </p>
            <p>
              <NavHashLink className="btn btn-secondary" to="/services#repairs">
                View services &raquo;
              </NavHashLink>
            </p>
          </div>

          <div className="col-lg-4">
            <img
              alt="Backflow Installation Assembly"
              src={InstallationImg}
              className="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
            />
            <h3>Backflow Installation</h3>
            <p>
              We install all sizes of backflow prevention assemblies. From ½” to
              over 10” we will come up with a scope of work and plan of action
              to bring your property into compliance.
            </p>
            <p>
              <NavHashLink
                className="btn btn-secondary"
                to="/services#installation"
              >
                View services &raquo;
              </NavHashLink>
            </p>
          </div>
        </div>

        <hr className="water-hr" />

        <div className="row featurette flex-row">
          <div className="col-md-7 align-items-center">
            <h2 className="featurette-heading align-items-center align-content-center">
              What is backflow
              <span className="text-muted"> and why do I need prevention?</span>
            </h2>
            <p className="lead">
              Backflow means the undesirable reversal of flow of a liquid, gas,
              or suspended solid into the potable water supply; a backflow
              preventer is designed to keep this from happening.
            </p>
            <p>
              <Link to="/whatisbackflow" className="btn btn-sm btn-info">
                Learn More
              </Link>
            </p>
          </div>
          <div className="col-md-5 align-items-center">
            <img
              alt="Backflow Instruction Diagram"
              src={BackflowDiagramImg}
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
            />
          </div>
        </div>

        <hr className="water-hr" />

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading">Locations we service</h2>
            <p className="lead">
              Cities – Cleveland, Clermont, Gainesville, Cornelia, Lula,
              Dahlonega, Dawsonville, Cumming, Johns Creek, Sugar Hill, Buford,
              Flowery Branch, Oakwood, Braselton, Winder, Commerce, Gillsville,
              Maysville, Winder, Hoschton, Lawrenceville, Suwannee, Murrayville,
              Talmo, Commerce, Jefferson, Demorest, Alto and Duluth, Counties
              Hall, White, Habersham, White, Gwinnett, Forsyth, Jackson, Dawson.
            </p>
            <p>
              <Link to="/locations" className="btn btn-sm btn-info">
                More Locations
              </Link>
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              alt="North Georgia Map"
              src={NorthGAMapImg}
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
            />
          </div>
        </div>

        <hr className="water-hr" />
      </div>
    </div>
  );
}
