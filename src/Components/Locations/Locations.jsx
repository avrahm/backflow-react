import LocationBlogItem from "../BlogItems/LocationBlogItem";
import ServicesBlogItem from "../BlogItems/ServicesBlogItem";

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

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d391552.79158432153!2d-83.99776547447951!3d34.54987366359082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885f5a6384873c31%3A0xca8c4b67da38f879!2sClermont%2C%20GA%2030527!5e0!3m2!1sen!2sus!4v1600566574017!5m2!1sen!2sus"
            width="100%"
            height="450"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>

          <hr className="water-hr" />

          <div className="row mb-2">
            <LocationBlogItem />
            <ServicesBlogItem />
          </div>
        </div>
      </div>
    </main>
  );
}
