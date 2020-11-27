import BackflowInfoBlogItem from "../BlogItems/BackflowInfoBlogItem";
import ServicesBlogItem from "../BlogItems/ServicesBlogItem";

export default function ContactUs() {
  return (
    <main role="main" className="container">
      <div className="main">
        <div className="col-md-12">
          <h1>Contact Us</h1>

          <p>Schedule your appointment today!</p>

          <hr className="water-hr" />

          <div className="row">
            <div className="col-md-6" style={{ padding: "0px 30px" }}>
              <div className="row">
                <div
                  className="card border-dark mb-3"
                  style={{ width: "100%" }}
                >
                  <div className="card-header">Call Us</div>
                  <div className="card-body text-success">
                    <h5 className="card-title">
                      <a
                        href="tel:706-438-2522"
                        className="btn btn-lg btn-outline-info"
                      >
                        Call Now 706-438-2522
                      </a>
                    </h5>
                    <p className="card-text">
                      Available <br />
                      Monday - Friday 7am - 6pm
                      <br />
                      Saturday 12pm - 4pm
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="card border-dark mb-3"
                  style={{ width: "100%" }}
                >
                  <div className="card-header">Email Us</div>
                  <div className="card-body text-success">
                    <h5 className="card-title">
                      <a
                        href="mailto:info@backflowtestersnorthga.com"
                        className="btn btn-sm btn-outline-info"
                      >
                        info@backflowtestersnorthga.com
                      </a>
                    </h5>
                    <p className="card-text">
                      We look forward to hearing from you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6" style={{ padding: "0px 30px" }}>
              <div className="row">
                <div
                  className="card border-dark mb-3"
                  style={{ width: "100%" }}
                >
                  <div className="card-header">Address</div>
                  <div className="card-body text-success">
                    <h5 className="card-title text-info">
                      P.O Box 216
                      <br /> Clermont GA 30527
                    </h5>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391552.79158432153!2d-83.99776547447951!3d34.54987366359082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885f5a6384873c31%3A0xca8c4b67da38f879!2sClermont%2C%20GA%2030527!5e0!3m2!1sen!2sus!4v1600566574017!5m2!1sen!2sus"
                      width="100%"
                      height="200px"
                      frameborder="0"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="water-hr" />

          <div className="row mb-2">
            <BackflowInfoBlogItem />
            <ServicesBlogItem />
          </div>
        </div>
      </div>
    </main>
  );
}
