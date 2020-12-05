import { NavHashLink } from "react-router-hash-link";

export default function BackflowInfoBlogItem() {
  return (
    <div className="col-md-6">
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">
            Information
          </strong>
          <h3 className="mb-0">What is Backflow?</h3>
          <div className="mb-1 text-muted">2 min read</div>
          <p className="card-text mb-auto">
            {" "}
            Backflow means the undesirable reversal of flow of a liquid, gas, or
            suspended solid into the potable water supply; a backflow preventer
            is designed to keep this from happening.
          </p>
          <NavHashLink to="/whatisbackflow#top" className="stretched-link">
            Learn more
          </NavHashLink>
        </div>
      </div>
    </div>
  );
}
