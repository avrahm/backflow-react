import { NavHashLink } from "react-router-hash-link";

export default function ServicesBlogItem() {
  return (
    <div className="col-md-6">
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-danger">Services</strong>
          <h3 className="mb-0">Services we offer </h3>
          <div className="mb-1 text-muted">Request Us</div>
          <p className="mb-auto">
            Ranging from testing, repairs, and installation we offer all your
            backflow needs. Give us a call today to schedule your appointment!
          </p>
          <NavHashLink to="/services#top" className="stretched-link">
            View Services
          </NavHashLink>
        </div>
      </div>
    </div>
  );
}
