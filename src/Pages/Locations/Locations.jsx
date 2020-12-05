import BackflowInfoBlogItem from "../../Components/BlogItems/BackflowInfoBlogItem";
import ServicesBlogItem from "../../Components/BlogItems/ServicesBlogItem";
import MapiFrame from "../../Components/MapiFrame/MapiFrame";

export default function Locations() {
  return (
    <main role="main" className="container">
      <div className="main">
        <div className="col-md-12">
          <h1>Locations</h1>

          <p>
            Cities – Cleveland, Clermont, Gainesville, Cornelia, Lula,
            Dahlonega, Dawsonville, Cumming, Johns Creek, Sugar Hill, Buford,
            Flowery Branch, Oakwood, Braselton, Winder, Commerce, Gillsville,
            Maysville, Winder, Hoschton, Lawrenceville, Suwannee, Murrayville,
            Talmo, Commerce, Jefferson, Demorest, Alto and Duluth, Counties
            Hall, White, Habersham, White, Gwinnett, Forsyth, Jackson, Dawson.
          </p>

          <hr className="water-hr" />

          <MapiFrame height="450px" />

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
