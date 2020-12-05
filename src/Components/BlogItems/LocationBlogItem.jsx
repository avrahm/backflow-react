import { NavHashLink } from "react-router-hash-link";

export default function LocationBlogItem() {
  return (
    <div className="col-md-6">
      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success">
            Locations
          </strong>
          <h3 className="mb-0">We Service North Georgia</h3>
          <div className="mb-1 text-muted">Map</div>
          <p className="mb-auto">
            Cleveland, Clermont, Gainesville, Cornelia, Lula, Dahlonega,
            Dawsonville, Cumming... Just to name a few
          </p>
          <NavHashLink to="/locations#top" className="stretched-link">
            View all locations
          </NavHashLink>
        </div>
      </div>
    </div>
  );
}
