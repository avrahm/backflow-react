import GeorgiaAssociationCertificationLogo from "../../images/certified-georgia-association-water-professionals.png";

export default function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <span className="accent">P.O Box 216</span>
          <br /> Clermont GA 30527
        </div>
        <div className="col-sm-6 col-md-3">
          <span className="accent">Jeff Pyke</span>
          <br />
          <a href="tel:706-438-2522">706-438-2522</a>
        </div>
        <div className="col-sm-6 col-md-3">
          <span className="accent">Licensed & Insured</span>
          <br />
          BPAT-03467
        </div>
        <div className="col-sm-6 col-md-3">
          <a href="https://www.gawp.org/" tagert="_blank">
            <img
              src={GeorgiaAssociationCertificationLogo}
              alt="Georgia Association Water Professionals Logo"
              height="65px"
            />
          </a>
        </div>
      </div>

      <div className="row copyright">
        <div className="col-md-6">
          &copy; 2020 Backflow Testers North GA, LLC
        </div>
        <div className="col-md-6">
          Web Developer: <a href="http://www.avrahm.com">Avrahm Kleinholz</a>
        </div>
      </div>
    </div>
  );
}
