export default function ContactInfo() {
  return (
    <>
      <div className="row">
        <div className="card border-dark mb-3" style={{ width: "100%" }}>
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
        <div className="card border-dark mb-3" style={{ width: "100%" }}>
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
            <p className="card-text">We look forward to hearing from you.</p>
          </div>
        </div>
      </div>
    </>
  );
}
