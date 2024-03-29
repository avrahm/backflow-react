import BackflowInfoBlogItem from "../../Components/BlogItems/BackflowInfoBlogItem";
import ServicesBlogItem from "../../Components/BlogItems/ServicesBlogItem";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";
import MapiFrame from "../../Components/MapiFrame/MapiFrame";

import GoogleRateUsImg from "../../images/rate-us-on-google.png";

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
              <ContactInfo />
            </div>
            <div className="col-md-6" style={{ padding: "0px 30px" }}>
              <div className="row">
                <div
                  className="card border-dark mb-3"
                  style={{ width: "100%" }}
                >
                  <div className="card-header">Address</div>
                  <div className="card-body text-success">
                    <div className="row">
                      <div className="col-6">
                        <h5 className="card-title text-info">
                          P.O Box 216
                          <br /> Clermont GA 30527
                        </h5>
                      </div>
                      <div className="col-6">
                        <a href=" https://g.page/backflow-testers-north-ga/review?rc">
                          <img
                            src={GoogleRateUsImg}
                            max-height="50px"
                            width="100%"
                            alt="Rate Us On Google"
                          />
                        </a>
                      </div>
                    </div>

                    <MapiFrame height="200px" />
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
